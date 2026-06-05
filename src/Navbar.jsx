import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
        .sc-badge:hover {
          transform: scale(1.1) rotate(-3deg);
        }
        .sc-name-shuja {
          background: linear-gradient(100deg, #ffffff 0%, #00ffb3 50%, #ffffff 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: sc-shimmer 4s linear infinite;
        }
      `}</style>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: `${14 * scale}px`,
          userSelect: "none",
        }}
        aria-label="Shuja Chaudary"
      >
        <div
          className="sc-badge"
          style={{
            position: "relative",
            width: `${50 * scale}px`,
            height: `${50 * scale}px`,
            borderRadius: `${12 * scale}px`,
            background: "linear-gradient(145deg, #0a2a1e 0%, #0d1117 55%, #0e2419 100%)",
            border: "1.5px solid rgba(0,255,180,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", top: 0, left: 0,
            width: `${13 * scale}px`, height: `${13 * scale}px`,
            borderTop: "2px solid #00ffb3", borderLeft: "2px solid #00ffb3",
            borderRadius: `${12 * scale}px 0 0 0`,
          }} />
          <div style={{
            position: "absolute", bottom: 0, right: 0,
            width: `${13 * scale}px`, height: `${13 * scale}px`,
            borderBottom: "2px solid #00ffb3", borderRight: "2px solid #00ffb3",
            borderRadius: `0 0 ${12 * scale}px 0`,
          }} />
          <span style={{
            fontFamily: "'Syne', 'Arial Black', sans-serif",
            fontWeight: 800,
            fontSize: `${22 * scale}px`,
            letterSpacing: "-1px",
            lineHeight: 1,
            background: "linear-gradient(135deg, #00ffb3 0%, #5ecfa0 50%, #00e6a0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 7px rgba(0,255,180,0.7))",
          }}>
            SC
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: `${3 * scale}px` }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: `${6 * scale}px` }}>
            <span
              className="sc-name-shuja"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: `${15 * scale}px`,
                letterSpacing: "3px",
                lineHeight: 1,
              }}
            >
              SHUJA
            </span>
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 300,
              fontSize: `${15 * scale}px`,
              letterSpacing: "3px",
              lineHeight: 1,
              color: "#6a7f8e",
            }}>
              CHAUDARY
            </span>
          </div>
          <div style={{
            height: "1.5px",
            borderRadius: "2px",
            background: "linear-gradient(90deg, #00ffb3 0%, rgba(0,255,180,0.08) 100%)",
            width: "100%",
          }} />
        </div>
      </div>
    </>
  );
}

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 60px",
    background: "#0d1117",
    borderBottom: "1px solid rgba(0,255,180,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    gap: "24px",
    flexWrap: "wrap",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    flexShrink: 0,
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "36px",
    margin: 0,
    padding: 0,
  },
  navLinksMobile: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "100%",
    order: 3,
    listStyle: "none",
    margin: 0,
    padding: "16px 0 8px",
  },
  link: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "15px",
    color: "#aab4c0",
    textDecoration: "none",
    paddingBottom: "4px",
    borderBottom: "2px solid transparent",
    transition: "color 0.25s, border-color 0.25s",
  },
  linkActive: {
    color: "#00ffb3",
    borderBottom: "2px solid #00ffb3",
  },
  hamburgerVisible: {
    display: "flex", flexDirection: "column", gap: "5px",
    background: "none", border: "none", cursor: "pointer", padding: "4px", zIndex: 1100,
  },
  bar: {
    display: "block", width: "26px", height: "2px",
    background: "#00ffb3", borderRadius: "2px", transition: "all 0.3s ease",
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  
  // Gets the current route to dynamically highlight the active nav item
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Map the display names to their actual routes
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "CV", path: "/cv" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" }
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@300;400;700;800&family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <nav style={styles.navbar}>
        <Link to="/" style={styles.logo} aria-label="Shuja Chaudary home">
          <SCLogo height={isMobile ? 34 : 44} />
        </Link>

        {isMobile && (
          <button style={styles.hamburgerVisible} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span style={{ ...styles.bar, transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span style={{ ...styles.bar, opacity: menuOpen ? 0 : 1 }} />
            <span style={{ ...styles.bar, transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        )}

        {(!isMobile || menuOpen) && (
          <ul style={isMobile ? styles.navLinksMobile : styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  // Check if the current URL matches the link's path to apply active styling
                  style={location.pathname === item.path ? { ...styles.link, ...styles.linkActive } : styles.link}
                  // Close the mobile menu automatically when a link is clicked
                  onClick={() => { if(isMobile) setMenuOpen(false); }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}