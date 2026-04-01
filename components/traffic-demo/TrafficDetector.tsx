"use client";

import { useCallback, useRef, useState } from "react";

const API_URL =
  process.env.NEXT_PUBLIC_DETECTION_API_URL ?? "http://localhost:8000";

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50 MB
const FRAME_MS = 500; // one frame every 500 ms during video

const CLASSES = [
  "bicycle", "bus", "car", "motorcycle", "pedestrian",
  "rider", "train", "truck", "other_vehicle", "other_person", "trailer",
];

const COLORS: Record<string, string> = {
  car:           "#00C850",
  bus:           "#0078FF",
  truck:         "#FFA000",
  motorcycle:    "#C800C8",
  bicycle:       "#00DCDC",
  pedestrian:    "#FF3C3C",
  rider:         "#FF8CB4",
  train:         "#5050FF",
  trailer:       "#B47800",
  other_vehicle: "#8CC864",
  other_person:  "#C8C800",
};

type Box = { ymin: number; xmin: number; ymax: number; xmax: number };
type Detection = { class: string; score: number; box: Box };
type ApiResult = {
  model_used: "Day" | "Night";
  luminance: number;
  detections: Detection[];
  counts: Record<string, number>;
};
type FrameRecord = Record<string, string | number>;

function drawDetections(canvas: HTMLCanvasElement, detections: Detection[], clear = true) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  if (clear) ctx.clearRect(0, 0, canvas.width, canvas.height);

  const { width: w, height: h } = canvas;
  const fontSize = Math.max(12, Math.round(h / 50));
  ctx.font = `bold ${fontSize}px sans-serif`;

  for (const det of detections) {
    const x  = det.box.xmin * w;
    const y  = det.box.ymin * h;
    const bw = (det.box.xmax - det.box.xmin) * w;
    const bh = (det.box.ymax - det.box.ymin) * h;
    const color = COLORS[det.class] ?? "#FFFFFF";

    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(2, w / 400);
    ctx.strokeRect(x, y, bw, bh);

    const label = `${det.class.replace("_", " ")} ${Math.round(det.score * 100)}%`;
    const tw  = ctx.measureText(label).width;
    const pad = 4;
    const lh  = fontSize + pad * 2;
    const ly  = y > lh ? y - lh : y + bh;

    ctx.fillStyle = color;
    ctx.fillRect(x - 1, ly, tw + pad * 2 + 2, lh);
    ctx.fillStyle = "#000";
    ctx.fillText(label, x + pad, ly + fontSize + pad - 1);
  }
}

export default function TrafficDetector() {
  const [mode, setMode]             = useState<"image" | "video">("image");
  const [status, setStatus]         = useState<"idle" | "loading" | "done" | "running" | "paused">("idle");
  const [latest, setLatest]         = useState<ApiResult | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [frameCount, setFrameCount] = useState(0);
  const [error, setError]           = useState<string | null>(null);

  const imgCanvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);
  const overlayRef   = useRef<HTMLCanvasElement>(null);
  const extractRef   = useRef<HTMLCanvasElement>(null);
  const intervalRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const busyRef      = useRef(false);
  const recordsRef   = useRef<FrameRecord[]>([]);
  const videoUrlRef  = useRef<string | null>(null);

  // ── helpers ──────────────────────────────────────────────────────────────

  const stopInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    busyRef.current = false;
  }, []);

  const reset = useCallback(() => {
    stopInterval();
    videoRef.current?.pause();
    if (videoUrlRef.current) {
      URL.revokeObjectURL(videoUrlRef.current);
      videoUrlRef.current = null;
    }
    recordsRef.current = [];
    setStatus("idle");
    setLatest(null);
    setVideoReady(false);
    setFrameCount(0);
    setError(null);
    const ic = imgCanvasRef.current?.getContext("2d");
    if (ic && imgCanvasRef.current)
      ic.clearRect(0, 0, imgCanvasRef.current.width, imgCanvasRef.current.height);
    const oc = overlayRef.current?.getContext("2d");
    if (oc && overlayRef.current)
      oc.clearRect(0, 0, overlayRef.current.width, overlayRef.current.height);
  }, [stopInterval]);

  function validateSize(file: File): boolean {
    if (file.size > MAX_FILE_SIZE) {
      setError(
        `File too large: ${(file.size / 1024 / 1024).toFixed(1)} MB. Maximum allowed is 50 MB.`
      );
      return false;
    }
    return true;
  }

  async function callDetect(blob: Blob): Promise<ApiResult | null> {
    const form = new FormData();
    form.append("file", blob, "frame.jpg");
    try {
      const res = await fetch(`${API_URL}/detect`, { method: "POST", body: form });
      if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
      return res.json();
    } catch (e) {
      setError(String(e));
      return null;
    }
  }

  // ── image mode ───────────────────────────────────────────────────────────

  async function handleImageFile(file: File) {
    if (!validateSize(file)) return;
    setStatus("loading");
    setError(null);
    setLatest(null);

    const result = await callDetect(file);
    if (!result) { setStatus("idle"); return; }

    const canvas = imgCanvasRef.current!;
    const url    = URL.createObjectURL(file);
    const img    = new window.Image();
    img.onload = () => {
      canvas.width  = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      drawDetections(canvas, result.detections, false); // false = don't clear the image
      URL.revokeObjectURL(url);
    };
    img.src = url;

    setLatest(result);
    setStatus("done");
  }

  // ── video mode ───────────────────────────────────────────────────────────

  function handleVideoFile(file: File) {
    if (!validateSize(file)) return;
    reset();
    videoUrlRef.current = URL.createObjectURL(file);
    const video = videoRef.current!;
    video.src = videoUrlRef.current;
    video.load();
    setVideoReady(false);
    setStatus("idle");
  }

  function startDetection() {
    const video   = videoRef.current!;
    const overlay = overlayRef.current!;
    const extract = extractRef.current!;

    if (status !== "paused") {
      overlay.width  = video.videoWidth  || 640;
      overlay.height = video.videoHeight || 360;
      extract.width  = overlay.width;
      extract.height = overlay.height;
    }

    stopInterval();
    video.play();
    setStatus("running");
    setError(null);

    intervalRef.current = setInterval(async () => {
      if (busyRef.current || video.paused || video.ended) return;
      busyRef.current = true;

      const ctx = extract.getContext("2d")!;
      ctx.drawImage(video, 0, 0, extract.width, extract.height);

      extract.toBlob(async (blob) => {
        if (!blob) { busyRef.current = false; return; }
        const result = await callDetect(blob);
        if (result) {
          drawDetections(overlay, result.detections);
          setLatest(result);
          setFrameCount((n) => n + 1);
          recordsRef.current.push({
            DateTime: new Date().toLocaleString(),
            Lumin:    result.luminance,
            Model:    result.model_used,
            ...result.counts,
          });
        }
        busyRef.current = false;
      }, "image/jpeg", 0.85);
    }, FRAME_MS);
  }

  function pauseDetection() {
    stopInterval();
    videoRef.current?.pause();
    setStatus("paused");
  }

  function downloadCSV() {
    const rows = recordsRef.current;
    if (!rows.length) return;
    const headers = ["DateTime", "Lumin", "Model", ...CLASSES];
    const lines   = rows.map((r) => headers.map((h) => r[h] ?? 0).join(","));
    const blob    = new Blob([[headers.join(","), ...lines].join("\n")], { type: "text/csv" });
    const a       = document.createElement("a");
    a.href        = URL.createObjectURL(blob);
    a.download    = "Master_Record.csv";
    a.click();
  }

  // ── derived ──────────────────────────────────────────────────────────────

  const totalDetections = latest
    ? Object.values(latest.counts).reduce((a, b) => a + b, 0)
    : 0;

  // ── render ───────────────────────────────────────────────────────────────

  return (
    <div className="space-y-6">

      {/* Mode toggle */}
      <div className="flex flex-wrap items-center gap-3">
        {(["image", "video"] as const).map((m) => (
          <button
            key={m}
            onClick={() => { reset(); setMode(m); }}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              mode === m ? "bg-[#1B6B62] text-white shadow" : "btn-primary"
            }`}
          >
            {m === "image" ? "Image" : "Video"}
          </button>
        ))}
        {(status !== "idle" || videoReady) && (
          <button
            onClick={reset}
            className="ml-auto btn-primary rounded-full px-5 py-2 text-sm font-medium"
          >
            Reset
          </button>
        )}
      </div>

      {/* Upload zone */}
      {(mode === "image" && status === "idle") ||
       (mode === "video" && !videoReady) ? (
        <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-[20px] border-2 border-dashed border-[#C9A84C]/50 bg-white/10 p-12 text-center transition hover:border-[#C9A84C] hover:bg-white/15">
          <span className="text-5xl">{mode === "image" ? "🖼️" : "🎬"}</span>
          <span className="text-base font-medium text-[#1E1410]">
            {mode === "image" ? "Upload a traffic image" : "Upload a traffic video"}
          </span>
          <span className="text-sm text-[#7A4E46]">
            {mode === "image" ? "JPG · PNG · WEBP" : "MP4 · MOV · AVI"} · max 50 MB
          </span>
          <input
            type="file"
            className="hidden"
            accept={mode === "image" ? "image/*" : "video/*"}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (!f) return;
              mode === "image" ? handleImageFile(f) : handleVideoFile(f);
              e.target.value = "";
            }}
          />
        </label>
      ) : null}

      {/* Loading */}
      {status === "loading" && (
        <div className="flex items-center gap-3 text-sm text-[#7A4E46]">
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Sending to model…
        </div>
      )}

      {/* Image canvas */}
      {mode === "image" && (status === "done" || status === "loading") && (
        <div className="overflow-hidden rounded-[20px] border border-white/30 bg-black">
          <canvas ref={imgCanvasRef} className="w-full" />
        </div>
      )}

      {/* Video + overlay */}
      <div
        className="relative overflow-hidden rounded-[20px] border border-white/30 bg-black"
        style={{ display: mode === "video" && videoReady ? "block" : "none" }}
      >
        <video
          ref={videoRef}
          className="w-full"
          muted
          playsInline
          onLoadedMetadata={() => setVideoReady(true)}
          onEnded={() => { stopInterval(); setStatus("done"); }}
        />
        <canvas
          ref={overlayRef}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
      </div>

      {/* Hidden extraction canvas */}
      <canvas ref={extractRef} className="hidden" />

      {/* Video controls */}
      {mode === "video" && videoReady && (
        <div className="flex flex-wrap items-center gap-3">
          {status === "idle" && (
            <button onClick={startDetection} className="btn-primary rounded-full px-6 py-2.5 text-sm font-medium">
              ▶ Start Detection
            </button>
          )}
          {status === "running" && (
            <button onClick={pauseDetection} className="btn-primary rounded-full px-6 py-2.5 text-sm font-medium">
              ⏸ Pause
            </button>
          )}
          {status === "paused" && (
            <button onClick={startDetection} className="btn-primary rounded-full px-6 py-2.5 text-sm font-medium">
              ▶ Resume
            </button>
          )}
          {(status === "paused" || status === "done") && recordsRef.current.length > 0 && (
            <button
              onClick={downloadCSV}
              className="rounded-full bg-[#1B6B62] px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
            >
              ↓ Download CSV ({recordsRef.current.length} frames)
            </button>
          )}
          {frameCount > 0 && (
            <span className="ml-auto text-sm text-[#7A4E46]">
              {frameCount} frame{frameCount !== 1 ? "s" : ""} analyzed
            </span>
          )}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="rounded-[14px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Stats */}
      {latest && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <span
              className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
                latest.model_used === "Day"
                  ? "bg-amber-100 text-amber-800"
                  : "bg-slate-700 text-slate-100"
              }`}
            >
              {latest.model_used === "Day" ? "☀️ Day Model" : "🌙 Night Model"}
            </span>
            <span className="rounded-full bg-white/40 px-4 py-1.5 text-sm text-[#1E1410]">
              Luminance: {latest.luminance}
            </span>
            <span className="rounded-full bg-white/40 px-4 py-1.5 text-sm text-[#1E1410]">
              {totalDetections} detection{totalDetections !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {CLASSES.map((cls) => {
              const count = latest.counts[cls] ?? 0;
              return (
                <div
                  key={cls}
                  className={`flex items-center justify-between rounded-[12px] px-3 py-2 text-sm ${
                    count > 0
                      ? "bg-white/50 font-medium text-[#1E1410]"
                      : "bg-white/10 text-[#7A4E46]/40"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ background: COLORS[cls] ?? "#999" }}
                    />
                    {cls.replace("_", " ")}
                  </span>
                  <span>{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
