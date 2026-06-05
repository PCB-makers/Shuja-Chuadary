// ============================================================
//  RecentProjects.jsx  —  PCB Designer Portfolio
//  Layout matches reference design: 3-D carousel, Prev / Next
//  buttons, teal accent.
//
//  ★ HOW TO ADD YOUR OWN PROJECTS (no coding needed):
//  ─────────────────────────────────────────────────
//  1. Click the  [+ Upload Project]  button (top-right corner).
//  2. Pick any image from your computer (PNG / JPG / WebP).
//  3. Fill in the project name, layer count, and short note.
//  4. Click Save — the project is stored in browser storage and
//     will still be there the next time you open the page.
//
//  To delete a project, hover its card and click the  ×  icon.
// ============================================================

import { useState, useEffect, useRef } from "react";

/* ---------- DEFAULT PLACEHOLDER PROJECTS ----------
   Replace / extend these once you upload real boards.          */
const DEFAULT_PROJECTS = [
  {
    id: "p-default-1",
    name: "ESP32 IoT Gateway",
    layers: "4-Layer",
    note: "Wi-Fi + BT, 2.4 GHz antenna, impedance-matched traces",
    image: null,
    color: "#1b3a5c",
  },
  {
    id: "p-default-2",
    name: "BLDC Motor Driver",
    layers: "2-Layer",
    note: "15 A H-bridge, IR2110 gate drivers, thermal pour design",
    image: null,
    color: "#1b4a3a",
  },
  {
    id: "p-default-3",
    name: "RF Transceiver Module",
    layers: "6-Layer",
    note: "2.4 GHz, 50 Ω controlled trace, SMA edge connector",
    image: null,
    color: "#3a1b4a",
  },
  {
    id: "p-default-4",
    name: "Medical ECG Frontend",
    layers: "6-Layer",
    note: "INA333 instrumentation amp, right-leg drive, IPC-A-610 III",
    image: null,
    color: "#1b3a5c",
  },
  {
    id: "p-default-5",
    name: "STM32 FOC Controller",
    layers: "4-Layer",
    note: "STM32G4 + DRV8353, CAN-FD, current-sensing shunt resistors",
    image: null,
    color: "#4a2a1b",
  },
];

/* ---------- PCB SVG PLACEHOLDER ---------- */
function PCBPlaceholder({ color = "#1b3a5c" }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 200" style={{ display: "block" }}>
      <rect width="320" height="200" fill={color} />
      {/* PCB grid */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 25} x2="320" y2={i * 25}
          stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}
      {Array.from({ length: 13 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 27} y1="0" x2={i * 27} y2="200"
          stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}
      {/* Copper traces */}
      <path d="M30 50 H100 V100 H180 V140 H260"
        fill="none" stroke="rgba(77,217,192,0.45)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 150 H130 V80 H200"
        fill="none" stroke="rgba(77,217,192,0.25)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M50 170 H260"
        fill="none" stroke="rgba(184,115,51,0.55)" strokeWidth="3" strokeLinecap="round" />
      {/* Vias */}
      {[[100, 50], [180, 100], [260, 140], [130, 150]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r={6} fill={color} stroke="#b87333" strokeWidth="1.8" />
          <circle cx={x} cy={y} r={2.5} fill="#b87333" />
        </g>
      ))}
      {/* IC package */}
      <rect x="110" y="60" width="60" height="40" rx="3"
        fill="rgba(0,0,0,0.3)" stroke="rgba(77,217,192,0.5)" strokeWidth="1" />
      <text x="140" y="83" textAnchor="middle"
        fill="rgba(77,217,192,0.7)" fontSize="10" fontFamily="monospace">U1</text>
      {[68, 74, 80, 86].map((y) => (
        <line key={y} x1="110" y1={y} x2="103" y2={y}
          stroke="rgba(77,217,192,0.5)" strokeWidth="1.2" />
      ))}
      {[68, 74, 80, 86].map((y) => (
        <line key={`r${y}`} x1="170" y1={y} x2="177" y2={y}
          stroke="rgba(77,217,192,0.5)" strokeWidth="1.2" />
      ))}
      {/* Resistors */}
      <rect x="220" y="55" width="22" height="10" rx="2"
        fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <rect x="220" y="75" width="22" height="10" rx="2"
        fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* PCB border */}
      <rect x="4" y="4" width="312" height="192" rx="4"
        fill="none" stroke="rgba(77,217,192,0.2)" strokeWidth="1.5" strokeDasharray="6 4" />
    </svg>
  );
}

/* ---------- UPLOAD MODAL ---------- */
function UploadModal({ onSave, onClose }) {
  const [preview, setPreview] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [name, setName] = useState("");
  const [layers, setLayers] = useState("2-Layer");
  const [note, setNote] = useState("");
  const fileRef = useRef();

  const onFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setImgData(ev.target.result);
      setPreview(ev.target.result);
    };
    reader.readAsDataURL(f);
  };

  const valid = name.trim().length > 0;

  const handleSave = () => {
    if (!valid) return;
    onSave({ name: name.trim(), layers, note: note.trim(), image: imgData });
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(10,16,26,0.88)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "20px",
    }}>
      <div style={{
        background: "#1a2740", borderRadius: 12,
        border: "1px solid rgba(77,217,192,0.2)",
        padding: "32px", width: "100%", maxWidth: 460,
        fontFamily: "'Nunito Sans', sans-serif",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 800 }}>Upload PCB Project</h3>
          <button onClick={onClose} style={{
            background: "none", border: "none", color: "#8fa3bc",
            fontSize: 22, cursor: "pointer", lineHeight: 1,
          }}>×</button>
        </div>

        {/* Image drop zone */}
        <div
          onClick={() => fileRef.current?.click()}
          style={{
            border: "2px dashed rgba(77,217,192,0.3)",
            borderRadius: 8, height: 160,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", marginBottom: 20, overflow: "hidden",
            background: "rgba(0,0,0,0.2)", position: "relative",
          }}
        >
          {preview
            ? <img src={preview} alt="preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : (
              <div style={{ textAlign: "center" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4dd9c0" strokeWidth="1.5" style={{ display: "block", margin: "0 auto 10px" }}>
                  <polyline points="16 16 12 12 8 16" />
                  <line x1="12" y1="12" x2="12" y2="21" />
                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                </svg>
                <p style={{ color: "#4dd9c0", fontSize: 13, fontWeight: 700 }}>Click to choose image</p>
                <p style={{ color: "#8fa3bc", fontSize: 11, marginTop: 4 }}>PNG · JPG · WebP</p>
              </div>
            )
          }
          <input ref={fileRef} type="file" accept="image/*"
            style={{ display: "none" }} onChange={onFile} />
        </div>

        {/* Fields */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project name  e.g.  ESP32 IoT Gateway"
          style={{
            width: "100%", padding: "10px 14px",
            background: "rgba(0,0,0,0.25)",
            border: "1px solid rgba(77,217,192,0.2)", borderRadius: 6,
            color: "#fff", fontSize: 13, fontFamily: "'Nunito Sans', sans-serif",
            marginBottom: 12, outline: "none",
          }}
        />

        <select
          value={layers}
          onChange={(e) => setLayers(e.target.value)}
          style={{
            width: "100%", padding: "10px 14px",
            background: "#131e2e",
            border: "1px solid rgba(77,217,192,0.2)", borderRadius: 6,
            color: "#fff", fontSize: 13, fontFamily: "'Nunito Sans', sans-serif",
            marginBottom: 12, outline: "none", cursor: "pointer",
          }}
        >
          {["1-Layer", "2-Layer", "4-Layer", "6-Layer", "8-Layer", "10-Layer", "12-Layer"].map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Short description  e.g.  RF board with impedance-controlled traces"
          rows={3}
          style={{
            width: "100%", padding: "10px 14px",
            background: "rgba(0,0,0,0.25)",
            border: "1px solid rgba(77,217,192,0.2)", borderRadius: 6,
            color: "#fff", fontSize: 13, fontFamily: "'Nunito Sans', sans-serif",
            marginBottom: 20, outline: "none", resize: "vertical",
          }}
        />

        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={onClose} style={{
            flex: 1, padding: "11px",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8,
            color: "#8fa3bc", fontSize: 14, fontWeight: 700,
            cursor: "pointer", fontFamily: "'Nunito Sans', sans-serif",
          }}>
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!valid}
            style={{
              flex: 2, padding: "11px",
              background: valid ? "#4dd9c0" : "#2a3f56",
              border: "none", borderRadius: 8,
              color: valid ? "#0f1923" : "#4b5a6e",
              fontSize: 14, fontWeight: 800,
              cursor: valid ? "pointer" : "not-allowed",
              fontFamily: "'Nunito Sans', sans-serif",
              transition: "background 0.2s",
            }}
          >
            Save Project
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- MAIN COMPONENT ---------- */
export default function RecentProjects() {
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);   // index of centre card
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hoverId, setHoverId] = useState(null);

  /* ── Load from persistent storage ── */
  useEffect(() => {
    (async () => {
      try {
        const res = await window.storage.get("pcb-projects-v2");
        if (res?.value) {
          const saved = JSON.parse(res.value);
          if (saved.length) {
            setProjects(saved);
            setActive(0);
            setLoading(false);
            return;
          }
        }
      } catch (_) {}
      setProjects(DEFAULT_PROJECTS);
      setLoading(false);
    })();
  }, []);

  const persist = async (list) => {
    try { await window.storage.set("pcb-projects-v2", JSON.stringify(list)); }
    catch (e) { console.error("Storage error:", e); }
  };

  /* ── Add project ── */
  const handleSave = async ({ name, layers, note, image }) => {
    const newP = {
      id: `p-${Date.now()}`,
      name, layers, note, image,
      color: ["#1b3a5c", "#1b4a3a", "#3a1b4a", "#4a2a1b", "#1b3a4a"][projects.length % 5],
    };
    const updated = [...projects, newP];
    setProjects(updated);
    setActive(updated.length - 1);
    await persist(updated);
    setShowModal(false);
  };

  /* ── Delete project ── */
  const handleDelete = async (id, e) => {
    e.stopPropagation();
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated.length ? updated : DEFAULT_PROJECTS);
    setActive(0);
    await persist(updated.length ? updated : DEFAULT_PROJECTS);
  };

  /* ── Navigation ── */
  const n = projects.length;
  const goPrev = () => setActive((a) => (a - 1 + n) % n);
  const goNext = () => setActive((a) => (a + 1) % n);

  /* ── Carousel position helper ──
     Returns CSS transform / opacity / zIndex for card at `idx`
     relative to the `active` centre card.                       */
  const cardStyle = (idx) => {
    const offset = ((idx - active + n) % n + n) % n;
    // normalise to −floor(n/2) … +floor(n/2)
    const rel = offset > Math.floor(n / 2) ? offset - n : offset;

    // Only render cards within 2 positions of centre
    const abs = Math.abs(rel);
    if (abs > 2) return null;

    const configs = {
      0:  { scale: 1,    tx: 0,    ty: 0,   z: 10, op: 1    },
      1:  { scale: 0.78, tx: 320,  ty: 30,  z: 6,  op: 0.72 },
      "-1": { scale: 0.78, tx: -320, ty: 30, z: 6,  op: 0.72 },
      2:  { scale: 0.6,  tx: 560,  ty: 60,  z: 2,  op: 0.4  },
      "-2": { scale: 0.6, tx: -560, ty: 60, z: 2,  op: 0.4  },
    };
    const cfg = configs[rel] ?? configs[Math.sign(rel) * 2];

    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: `translate(-50%, -50%) translateX(${cfg.tx}px) translateY(${cfg.ty}px) scale(${cfg.scale})`,
      zIndex: cfg.z,
      opacity: cfg.op,
      transition: "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
      cursor: rel === 0 ? "default" : "pointer",
      width: 300,
    };
  };

  if (loading) return (
    <div style={{
      background: "#131e2e", minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{ color: "#4dd9c0", fontFamily: "monospace", fontSize: 14 }}>
        Loading projects…
      </span>
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .rp-section {
          background: "#0d1117";
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 60px;
          font-family: 'Nunito Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* ── Upload button — top-right ── */
        .rp-upload-btn {
          position: absolute;
          top: 32px; right: 40px;
          display: flex; align-items: center; gap: 8px;
          background: #4dd9c0;
          color: #0f1923;
          border: none; border-radius: 8px;
          padding: 9px 18px;
          font-family: 'Nunito Sans', sans-serif;
          font-size: 13px; font-weight: 800;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
        }
        .rp-upload-btn:hover { background: #2ec4aa; }
        .rp-upload-btn:active { transform: scale(0.97); }

        /* ── Header ── */
        .rp-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          color: #ffffff;
          text-align: center;
          margin-bottom: 14px;
        }
        .rp-title span { color: #4dd9c0; }

        .rp-subtitle {
          font-size: 14px;
          color: #8fa3bc;
          text-align: center;
          max-width: 500px;
          line-height: 1.7;
          margin-bottom: 60px;
        }

        /* ── Stage (carousel area) ── */
        .rp-stage {
          position: relative;
          width: 100%;
          max-width: 960px;
          height: 360px;
          margin-bottom: 48px;
        }

        /* ── Side arrow buttons ── */
        .rp-side-btn {
          position: absolute;
          top: 50%; transform: translateY(-50%);
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #8fa3bc;
          font-size: 20px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 20;
          transition: background 0.2s, color 0.2s;
          line-height: 1;
        }
        .rp-side-btn:hover { background: rgba(77,217,192,0.15); color: #4dd9c0; }
        .rp-side-btn.left { left: 0; }
        .rp-side-btn.right { right: 0; }

        /* ── Project card ── */
        .proj-card {
          background: #1a2740;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(77,217,192,0.1);
          transition: border-color 0.25s;
          width: 300px;
        }

        .proj-card.is-center {
          border-color: rgba(77,217,192,0.35);
        }

        .proj-card-img {
          width: 100%; height: 180px;
          overflow: hidden; position: relative;
          background: #111b2b;
          flex-shrink: 0;
        }

        .proj-card-img img {
          width: 100%; height: 100%; object-fit: cover;
        }

        /* delete button shown on hover when centre */
        .proj-delete-btn {
          position: absolute; top: 8px; right: 8px;
          width: 26px; height: 26px;
          border-radius: 50%;
          background: rgba(220,50,50,0.85);
          border: none; color: #fff;
          font-size: 14px; line-height: 1;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 5;
          opacity: 0; transition: opacity 0.2s;
        }
        .proj-card:hover .proj-delete-btn { opacity: 1; }

        .proj-card-body {
          padding: 16px 18px 18px;
        }

        .proj-layers-badge {
          display: inline-block;
          background: rgba(77,217,192,0.12);
          color: #4dd9c0;
          font-size: 10px; font-weight: 800;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 3px 8px; border-radius: 4px;
          margin-bottom: 10px;
        }

        .proj-name {
          font-size: 15px; font-weight: 800;
          color: #ffffff; margin-bottom: 6px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }

        .proj-note {
          font-size: 12px; color: #8fa3bc;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* ── Bottom Prev / Next buttons ── */
        .rp-nav-row {
          display: flex; gap: 16px;
        }

        .rp-nav-pill {
          padding: 11px 36px;
          border-radius: 30px;
          background: #4dd9c0;
          color: #0f1923;
          border: none;
          font-family: 'Nunito Sans', sans-serif;
          font-size: 14px; font-weight: 800;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
        }
        .rp-nav-pill:hover { background: #2ec4aa; }
        .rp-nav-pill:active { transform: scale(0.96); }

        .rp-count {
          margin-top: 16px;
          font-size: 12px; color: #4b5a6e;
          letter-spacing: 1px;
        }
      `}</style>

      <section className="rp-section">

       

        {/* Title */}
        <h2 className="rp-title">
          Recent <span>Projects</span>
        </h2>
        <p className="rp-subtitle">
          A selection of PCB designs spanning IoT, power electronics, RF systems,
          and medical-grade boards — each built to IPC standards and DFM-ready.
        </p>

        {/* Carousel stage */}
        <div className="rp-stage">
          {/* Side arrow — Left */}
          <button className="rp-side-btn left" onClick={goPrev} aria-label="Previous project">
            &#8249;
          </button>

          {/* Cards */}
          {projects.map((proj, idx) => {
            const cs = cardStyle(idx);
            if (!cs) return null;
            const isCenter = idx === active;

            return (
              <div
                key={proj.id}
                style={cs}
                className={`proj-card${isCenter ? " is-center" : ""}`}
                onClick={() => !isCenter && setActive(idx)}
              >
                {/* Image / placeholder */}
                <div className="proj-card-img">
                  {proj.image
                    ? <img src={proj.image} alt={proj.name} />
                    : <PCBPlaceholder color={proj.color} />
                  }

                </div>

                {/* Card body */}
                <div className="proj-card-body">
                  <span className="proj-layers-badge">{proj.layers}</span>
                  <p className="proj-name">{proj.name}</p>
                  <p className="proj-note">{proj.note}</p>
                </div>
              </div>
            );
          })}

          {/* Side arrow — Right */}
          <button className="rp-side-btn right" onClick={goNext} aria-label="Next project">
            &#8250;
          </button>
        </div>

        {/* Prev / Next pill buttons (matches reference design) */}
        <div className="rp-nav-row">
          <button className="rp-nav-pill" onClick={goPrev}>Prev</button>
          <button className="rp-nav-pill" onClick={goNext}>Next</button>
        </div>

        {/* Project counter */}
        <p className="rp-count">
          {active + 1} / {n} — {projects[active]?.name}
        </p>

      </section>

      {/* Upload modal */}
      {showModal && (
        <UploadModal
          onSave={handleSave}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
