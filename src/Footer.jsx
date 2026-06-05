import { useState, useEffect } from "react";
import fiverrLogo from "./Assets/fiverr.png";

const quickLinks = ["Home", "Projects", "Services", "Resume", "Contact"];

const services = [
  "PCB Layout Design",
  "Schematic Capture",
  "Firmware Development",
  "Signal Integrity",
  "IoT Hardware Design",
];

function SCLogo({ height = 42 }) {
  const scale = height / 42;
  return (
    <>
      <style>{`
        @keyframes sc-glow {
          0%, 100% { box-shadow: 0 0 8px 2px rgba(0,255,180,0.3), inset 0 0 8px rgba(0,255,180,0.08); }
          50%       { box-shadow: 0 0 20px 6px rgba(0,255,180,0.55), inset 0 0 14px rgba(0,255,180,0.18); }
        }
        @keyframes sc-shimmer {
          0%   { background-position: -300% center; }
          100% { background-position: 300% center; }
        }
        .sc-badge {
          animation: sc-glow 3s ease-in-out infinite;
          transition: transform 0.25s cubic-bezier(.34,1.56,.64,1);
        }
        .sc-badge:hover { transform: scale(1.1) rotate(-3deg); }
        .sc-name-shuja {
          background: linear-gradient(100deg, #ffffff 0%, #00ffb3 50%, #ffffff 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: sc-shimmer 4s linear infinite;
        }
      `}</style>
      <div style={{ display: "flex", alignItems: "center", gap: `${14 * scale}px`, userSelect: "none" }} aria-label="Shuja Chaudary">
        <div className="sc-badge" style={{ position: "relative", width: `${50 * scale}px`, height: `${50 * scale}px`, borderRadius: `${12 * scale}px`, background: "linear-gradient(145deg, #0a2a1e 0%, #0d1117 55%, #0e2419 100%)", border: "1.5px solid rgba(0,255,180,0.45)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: `${13 * scale}px`, height: `${13 * scale}px`, borderTop: "2px solid #00ffb3", borderLeft: "2px solid #00ffb3", borderRadius: `${12 * scale}px 0 0 0` }} />
          <div style={{ position: "absolute", bottom: 0, right: 0, width: `${13 * scale}px`, height: `${13 * scale}px`, borderBottom: "2px solid #00ffb3", borderRight: "2px solid #00ffb3", borderRadius: `0 0 ${12 * scale}px 0` }} />
          <span style={{ fontFamily: "'Syne', 'Arial Black', sans-serif", fontWeight: 800, fontSize: `${22 * scale}px`, letterSpacing: "-1px", lineHeight: 1, background: "linear-gradient(135deg, #00ffb3 0%, #5ecfa0 50%, #00e6a0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 7px rgba(0,255,180,0.7))" }}>SC</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: `${3 * scale}px` }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: `${6 * scale}px` }}>
            <span className="sc-name-shuja" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: `${15 * scale}px`, letterSpacing: "3px", lineHeight: 1 }}>SHUJA</span>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 300, fontSize: `${15 * scale}px`, letterSpacing: "3px", lineHeight: 1, color: "#6a7f8e" }}>CHAUDARY</span>
          </div>
          <div style={{ height: "1.5px", borderRadius: "2px", background: "linear-gradient(90deg, #00ffb3 0%, rgba(0,255,180,0.08) 100%)", width: "100%" }} />
        </div>
      </div>
    </>
  );
}

export default function Footer() {
  const [width, setWidth] = useState(window.innerWidth);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = width <= 768;
  const isSmall = width <= 480;

  const s = {
    footer: {
      background: "#080d13",
      borderTop: "1px solid rgba(0,255,180,0.1)",
      padding: isSmall ? "50px 16px 0" : isMobile ? "60px 24px 0" : "80px 60px 0",
      fontFamily: "'DM Sans', sans-serif",
    },
    topGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : isSmall ? "1fr" : "2fr 1fr 1fr 1.5fr",
      gap: isMobile ? "40px" : "40px",
      paddingBottom: "60px",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    },
    brand: {},
    logoRow: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "18px",
    },
    logoIcon: {
      color: "#00ffb3",
      fontSize: "22px",
    },
    logoText: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: "20px",
      color: "#fff",
    },
    brandDesc: {
      fontSize: "14px",
      color: "#7a8fa0",
      lineHeight: 1.8,
      maxWidth: "280px",
      marginBottom: "28px",
    },
    socialRow: {
      display: "flex",
      gap: "12px",
    },
    socialBtn: (id) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      border: hoveredSocial === id
        ? "1.5px solid #00ffb3"
        : "1.5px solid rgba(0,255,180,0.25)",
      background: hoveredSocial === id
        ? "rgba(0,255,180,0.12)"
        : "transparent",
      color: "#00ffb3",
      textDecoration: "none",
      cursor: "pointer",
      transition: "all 0.25s",
      transform: hoveredSocial === id ? "translateY(-3px)" : "translateY(0)",
    }),
    col: {},
    colTitle: {
      fontFamily: "'Syne', sans-serif",
      fontSize: "16px",
      fontWeight: 700,
      color: "#e8f0f8",
      marginBottom: "20px",
      position: "relative",
      paddingBottom: "12px",
    },
    colTitleLine: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "32px",
      height: "2px",
      background: "#00ffb3",
      borderRadius: "2px",
    },
    linkList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    link: (id) => ({
      fontSize: "14px",
      color: hoveredLink === id ? "#00ffb3" : "#7a8fa0",
      textDecoration: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      transition: "color 0.25s",
      transform: hoveredLink === id ? "translateX(4px)" : "translateX(0)",
      transition: "color 0.25s, transform 0.25s",
    }),
    linkArrow: {
      fontSize: "11px",
      color: "#00ffb3",
    },
    newsletter: {},
    newsletterDesc: {
      fontSize: "14px",
      color: "#7a8fa0",
      lineHeight: 1.7,
      marginBottom: "20px",
    },
    inputRow: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    input: {
      background: "#131a24",
      border: "1px solid rgba(0,255,180,0.2)",
      borderRadius: "8px",
      padding: "11px 16px",
      color: "#cdd6e0",
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "14px",
      outline: "none",
      width: "100%",
    },
    subscribeBtn: {
      background: "#00ffb3",
      color: "#0d1117",
      border: "none",
      borderRadius: "8px",
      padding: "11px 20px",
      fontFamily: "'Syne', sans-serif",
      fontSize: "14px",
      fontWeight: 700,
      cursor: "pointer",
      width: "100%",
      transition: "background 0.25s",
    },
    successMsg: {
      fontSize: "13px",
      color: "#00ffb3",
      marginTop: "8px",
    },
    bottom: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "16px",
      padding: "24px 0",
    },
    copyright: {
      fontSize: "13px",
      color: "#4a5a6a",
    },
    copyrightAccent: {
      color: "#00ffb3",
    },
    bottomLinks: {
      display: "flex",
      gap: "24px",
    },
    bottomLink: (id) => ({
      fontSize: "13px",
      color: hoveredLink === `bottom-${id}` ? "#00ffb3" : "#4a5a6a",
      textDecoration: "none",
      cursor: "pointer",
      transition: "color 0.25s",
    }),
    contactItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      marginBottom: "14px",
    },
    contactIcon: {
      color: "#00ffb3",
      flexShrink: 0,
      marginTop: "2px",
    },
    contactText: {
      fontSize: "14px",
      color: "#7a8fa0",
      lineHeight: 1.6,
    },
  };

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
      `}</style>

      <footer style={s.footer}>
        <div style={s.topGrid}>

          {/* ── Brand Column ── */}
          <div style={s.brand}>
            <div style={{ ...s.logoRow, marginBottom: "18px" }}>
              <SCLogo height={40} />
            </div>
            <p style={s.brandDesc}>
              Passionate PCB designer and embedded systems engineer crafting
              reliable, high-performance hardware solutions for IoT, industrial,
              and consumer electronics.
            </p>
            <div style={s.socialRow}>
              {/* LinkedIn */}
              <a
                href="#linkedin"
                style={s.socialBtn("linkedin")}
                onMouseEnter={() => setHoveredSocial("linkedin")}
                onMouseLeave={() => setHoveredSocial(null)}
                aria-label="LinkedIn"
              >
                <svg width="25" height="25" viewBox="0 0 24 24" fill="#00ffb3">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Fiverr */}
                     <a 
  href="https://www.fiverr.com/shuja_chaudhry/schematic-design-pcb-design-create-gerber-and-bom-files?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=9eb045b7843f4997a32cd8f14fe44de2&context=recommendation&pckg_id=1&pos=3&context_alg=recently_viewed&imp_id=35bec34e-4771-4c68-a0fe-7ace7f757e43" 
  style={s.socialLink} 
  aria-label="Fiverr"
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src={fiverrLogo} 
    alt="Fiverr" 
    style={{ 
      width: '25px', 
      height: '25px', 
      display: 'inline-block', 
      verticalAlign: 'middle',
      borderRadius: '50%' // Keeps it perfectly circular
    }} 
  />
</a>
              {/* Hackaday */}
              <a
                href="#hackaday"
                style={s.socialBtn("hackaday")}
                onMouseEnter={() => setHoveredSocial("hackaday")}
                onMouseLeave={() => setHoveredSocial(null)}
                aria-label="Hackaday"
              >
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#00ffb3" strokeWidth="1.8">
                  <rect x="2" y="3" width="20" height="18" rx="2"/>
                  <path d="M8 12h8M12 8v8"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div style={s.col}>
            <h4 style={s.colTitle}>
              Quick Links
              <span style={s.colTitleLine} />
            </h4>
            <ul style={s.linkList}>
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={s.link(`ql-${link}`)}
                    onMouseEnter={() => setHoveredLink(`ql-${link}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span style={s.linkArrow}>›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div style={s.col}>
            <h4 style={s.colTitle}>
              Services
              <span style={s.colTitleLine} />
            </h4>
            <ul style={s.linkList}>
              {services.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    style={s.link(`svc-${svc}`)}
                    onMouseEnter={() => setHoveredLink(`svc-${svc}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span style={s.linkArrow}>›</span>
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact + Newsletter ── */}
          <div style={s.newsletter}>
            <h4 style={s.colTitle}>
              Get In Touch
              <span style={s.colTitleLine} />
            </h4>

            <div style={s.contactItem}>
              <span style={s.contactIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00ffb3" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <span style={s.contactText}>Rawalpindi, Punjab, Pakistan</span>
            </div>

            <div style={s.contactItem}>
              <span style={s.contactIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00ffb3" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <span style={s.contactText}>shuja@pcbdesign.com</span>
            </div>

            <div style={s.contactItem}>
              <span style={s.contactIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00ffb3" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                </svg>
              </span>
              <span style={s.contactText}>+92 306 3972008</span>
            </div>

            <p style={{ ...s.newsletterDesc, marginTop: "8px" }}>
              Stay updated with my latest projects and hardware designs.
            </p>
            <div style={s.inputRow}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={s.input}
              />
              <button style={s.subscribeBtn} onClick={handleSubscribe}>
                Subscribe
              </button>
              {subscribed && (
                <p style={s.successMsg}>✓ Thanks for subscribing!</p>
              )}
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div style={s.bottom}>
          <p style={s.copyright}>
            © {new Date().getFullYear()} <span style={s.copyrightAccent}>Shuja Chaudhary</span>. All rights reserved.
          </p>
          <div style={s.bottomLinks}>
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a
                key={item}
                href="#"
                style={s.bottomLink(item)}
                onMouseEnter={() => setHoveredLink(`bottom-${item}`)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
