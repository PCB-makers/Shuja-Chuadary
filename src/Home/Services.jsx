import { useState, useEffect } from "react";

// ── PCB-specific icons ─────────────────────────────────────────────────────────

const PCBLayoutIcon = () => (
  <svg width="64" height="64" viewBox="0 0 48 48" fill="none" stroke="#00ffb3" strokeWidth="1.5">
    <rect x="4" y="4" width="40" height="40" rx="3" />
    <path d="M10 14h8v8h8v-8h8" />
    <path d="M10 34h6v-6h12v6h6" />
    <circle cx="18" cy="14" r="2" />
    <circle cx="30" cy="14" r="2" />
    <circle cx="16" cy="28" r="2" />
    <circle cx="32" cy="28" r="2" />
    <rect x="20" y="20" width="8" height="8" rx="1" />
  </svg>
);

const SchematicIcon = () => (
  <svg width="64" height="64" viewBox="0 0 48 48" fill="none" stroke="#00ffb3" strokeWidth="1.5">
    <path d="M4 24h8" />
    <rect x="12" y="20" width="10" height="8" rx="1" />
    <path d="M22 24h6" />
    <path d="M28 18v12" />
    <path d="M32 18v12" />
    <path d="M32 24h8" />
    <path d="M20 40h8M22 43h4M24 36v4" />
    <path d="M4 10h40" />
    <path d="M24 10v10" />
  </svg>
);

const FirmwareIcon = () => (
  <svg width="64" height="64" viewBox="0 0 48 48" fill="none" stroke="#00ffb3" strokeWidth="1.5">
    <rect x="12" y="12" width="24" height="24" rx="2" />
    <path d="M12 17H6M12 22H6M12 27H6M12 32H6" />
    <path d="M36 17h6M36 22h6M36 27h6M36 32h6" />
    <path d="M17 20h4M17 24h8M17 28h5" />
  </svg>
);

const SignalIcon = () => (
  <svg width="64" height="64" viewBox="0 0 48 48" fill="none" stroke="#00ffb3" strokeWidth="1.5">
    <rect x="4" y="8" width="40" height="28" rx="2" />
    <path d="M8 26 L13 26 L13 16 L18 16 L18 26 L23 26 L23 16 L28 16 L28 26 L33 26 L33 16 L38 16 L38 26 L40 26" strokeLinejoin="round" />
    <path d="M10 38h28" />
    <path d="M24 36v4" />
  </svg>
);

const IoTIcon = () => (
  <svg width="64" height="64" viewBox="0 0 48 48" fill="none" stroke="#00ffb3" strokeWidth="1.5">
    <rect x="16" y="16" width="16" height="16" rx="3" />
    <path d="M10 10 a20 20 0 0 1 28 0" />
    <path d="M13 14 a15 15 0 0 1 22 0" />
    <circle cx="8" cy="34" r="3" />
    <circle cx="40" cy="34" r="3" />
    <circle cx="24" cy="44" r="3" />
    <path d="M16 28 L8 34" />
    <path d="M32 28 L40 34" />
    <path d="M24 32 L24 44" />
  </svg>
);

// ── Services data ──────────────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    title: "PCB Layout Design",
    icon: <PCBLayoutIcon />,
    description:
      "Multi-layer PCB layout with optimized trace routing, impedance control, and design-for-manufacture (DFM) best practices for reliable production.",
  },
  {
    id: 2,
    title: "Schematic Capture",
    icon: <SchematicIcon />,
    description:
      "Clean, well-documented schematic design using industry-standard EDA tools like KiCad, Altium, and Eagle for analog and digital circuits.",
  },
  {
    id: 3,
    title: "Firmware Development",
    icon: <FirmwareIcon />,
    description:
      "Embedded C/C++ firmware for microcontrollers (STM32, AVR, ESP32) including peripheral drivers, RTOS integration, and bootloaders.",
  },
  {
    id: 4,
    title: "Signal Integrity",
    icon: <SignalIcon />,
    description:
      "High-speed signal analysis, EMI/EMC compliance review, power distribution network design, and pre-layout simulation for clean designs.",
  },
  {
    id: 5,
    title: "IoT Hardware Design",
    icon: <IoTIcon />,
    description:
      "End-to-end IoT device hardware design — from wireless module integration (WiFi, BLE, LoRa) to sensor interfacing and power optimization.",
  },
];

// ── Component ──────────────────────────────────────────────────────────────────

const getVisibleCount = (width) => {
  if (width <= 480) return 1;
  if (width <= 768) return 2;
  return 3;
};

export default function Services() {
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = width <= 768;
  const isSmall = width <= 480;
  const VISIBLE = getVisibleCount(width);
  const maxActive = services.length - VISIBLE;

  const prev = () => setActive((a) => (a === 0 ? maxActive : a - 1));
  const next = () => setActive((a) => (a >= maxActive ? 0 : a + 1));

  const visible = services.slice(active, active + VISIBLE);

  const s = {
    section: {
      background: "#0d1117",
      padding: isSmall ? "40px 16px" : isMobile ? "50px 24px" : "80px 60px",
      position: "relative",
      overflow: "hidden",
    },
    bgGlow: {
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "600px",
      height: "300px",
      background: "radial-gradient(ellipse, rgba(0,255,179,0.05) 0%, transparent 70%)",
      pointerEvents: "none",
    },
    header: { marginBottom: "52px" },
    label: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "16px",
      color: "#7a8fa0",
      margin: "0 0 8px",
    },
    accent: { color: "#00ffb3" },
    heading: {
      fontFamily: "'Syne', sans-serif",
      fontSize: isSmall ? "28px" : "clamp(28px, 4vw, 42px)",
      fontWeight: 800,
      color: "#e8f0f8",
      margin: 0,
    },
    carousel: {
      display: "flex",
      gap: isMobile ? "16px" : "24px",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    card: (idx) => ({
      flex: `1 1 ${isSmall ? "100%" : "240px"}`,
      maxWidth: isSmall ? "100%" : "300px",
      background: "#131a24",
      border: hoveredCard === idx
        ? "1px solid rgba(0,255,180,0.4)"
        : "1px solid rgba(255,255,255,0.06)",
      borderRadius: "16px",
      padding: isSmall ? "28px 20px" : "36px 28px",
      textAlign: "center",
      cursor: "pointer",
      transform: hoveredCard === idx ? "translateY(-6px)" : "translateY(0)",
      boxShadow: hoveredCard === idx ? "0 12px 40px rgba(0,255,179,0.1)" : "none",
      transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
    }),
    cardIconWrap: { display: "flex", justifyContent: "center", marginBottom: "20px" },
    cardTitle: {
      fontFamily: "'Syne', sans-serif",
      fontSize: "18px",
      fontWeight: 700,
      color: "#e8f0f8",
      margin: "0 0 12px",
    },
    cardDesc: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "14px",
      color: "#7a8fa0",
      lineHeight: 1.7,
      margin: 0,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      marginTop: "40px",
    },
    btn: (id) => ({
      background: hoveredBtn === id ? "rgba(0,255,180,0.22)" : "rgba(0,255,180,0.1)",
      border: "1.5px solid rgba(0,255,180,0.35)",
      color: "#00ffb3",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      cursor: "pointer",
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: hoveredBtn === id ? "scale(1.08)" : "scale(1)",
      transition: "background 0.25s, transform 0.2s",
    }),
    dots: { display: "flex", gap: "8px" },
    dot: (i) => ({
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: i === active ? "#00ffb3" : "rgba(255,255,255,0.2)",
      cursor: "pointer",
      transform: i === active ? "scale(1.3)" : "scale(1)",
      transition: "background 0.25s, transform 0.25s",
    }),
  };

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');`}</style>
      <section style={s.section} id="services">
        <div style={s.bgGlow} />
        <div style={s.header}>
          <p style={s.label}>My <span style={s.accent}>services</span></p>
          <h2 style={s.heading}>What I Do</h2>
        </div>

        <div style={s.carousel}>
          {visible.map((svc, idx) => (
            <div
              key={svc.id}
              style={s.card(idx)}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={s.cardIconWrap}>{svc.icon}</div>
              <h3 style={s.cardTitle}>{svc.title}</h3>
              <p style={s.cardDesc}>{svc.description}</p>
            </div>
          ))}
        </div>

        <div style={s.controls}>
          <button
            style={s.btn("prev")}
            onMouseEnter={() => setHoveredBtn("prev")}
            onMouseLeave={() => setHoveredBtn(null)}
            onClick={prev}
            aria-label="Previous"
          >&#8592;</button>

          <div style={s.dots}>
            {services.map((_, i) => (
              <span
                key={i}
                style={s.dot(i)}
                onClick={() => setActive(Math.min(i, maxActive))}
              />
            ))}
          </div>

          <button
            style={s.btn("next")}
            onMouseEnter={() => setHoveredBtn("next")}
            onMouseLeave={() => setHoveredBtn(null)}
            onClick={next}
            aria-label="Next"
          >&#8594;</button>
        </div>
      </section>
    </>
  );
}
