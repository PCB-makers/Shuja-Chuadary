import { useState, useEffect } from "react";
import Img from "../Assets/IMG_0684.JPG.jpeg"
import fiverrLogo from '../Assets/fiverr.png';

const getStyles = (isMobile, isSmall) => ({
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: isMobile ? "column-reverse" : "row",
    minHeight: isMobile ? "auto" : "calc(100vh - 70px)",
    padding: isSmall ? "30px 16px 40px" : isMobile ? "40px 24px 50px" : "60px 60px",
    background: "#0d1117",
    position: "relative",
    overflow: "hidden",
    gap: "40px",
    textAlign: isMobile ? "center" : "left",
  },
  bgGlow: {
    position: "absolute",
    top: "-100px",
    right: "200px",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(0,255,179,0.07) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  content: {
    flex: 1,
    maxWidth: isMobile ? "100%" : "520px",
    animation: "fadeInLeft 0.9s ease both",
    position: "relative",
    zIndex: 1,
  },
  greeting: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "22px",
    color: "#cdd6e0",
    margin: "0 0 6px",
  },
  greetingAccent: {
    color: "#00ffb3",
  },
  name: {
    fontSize: isSmall ? "32px" : isMobile ? "40px" : "clamp(36px, 5vw, 56px)",
    fontWeight: 800,
    color: "#00ffb3",
    margin: "0 0 10px",
    lineHeight: 1.1,
    letterSpacing: "-1px",
  },
  title: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "18px",
    fontWeight: 500,
    color: "#e0e8f0",
    margin: "0 0 18px",
  },
  bio: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "15px",
    color: "#7a8fa0",
    lineHeight: 1.7,
    margin: isMobile ? "0 auto 36px" : "0 0 36px",
    maxWidth: "360px",
  },
  cta: {
    display: "inline-block",
    background: "#00ffb3",
    color: "#0d1117",
    fontFamily: "'Syne', sans-serif",
    fontSize: "15px",
    fontWeight: 700,
    padding: isSmall ? "11px 26px" : "13px 32px",
    borderRadius: "40px",
    textDecoration: "none",
    letterSpacing: "0.5px",
    boxShadow: "0 0 20px rgba(0,255,179,0.25)",
    marginBottom: "48px",
    transition: "transform 0.25s, box-shadow 0.25s",
  },
  social: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
    justifyContent: isMobile ? "center" : "flex-start",
  },
  socialLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "#7a8fa0",
  },
  socialIcons: {
    display: "flex",
    gap: "12px",
  },
  socialLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "1.5px solid rgba(0,255,180,0.35)",
    color: "#00ffb3",
    textDecoration: "none",
    transition: "background 0.25s, border-color 0.25s",
  },
  imageWrap: {
    flexShrink: 0,
    animation: "fadeInRight 0.9s ease both",
    position: "relative",
    zIndex: 1,
  },
  hexagon: {
    width: isSmall ? "200px" : isMobile ? "240px" : "340px",
    height: isSmall ? "225px" : isMobile ? "270px" : "380px",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    background: "#00ffb3",
    overflow: "hidden",
    position: "relative",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top",
    filter: "contrast(1.05)",
    display: "block",
  },
});

const keyframes = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}
`;

export default function Hero() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = width <= 768;
  const isSmall = width <= 480;
  const s = getStyles(isMobile, isSmall);

  return (
    <>
      <style>{keyframes}</style>
      <section style={s.hero} id="home">
        <div style={s.bgGlow} />

        <div style={s.content}>
          <p style={s.greeting}>
            Hello, <span style={s.greetingAccent}>I'm</span>
          </p>
          <h1 style={s.name}>Shuja Chaudhary</h1>
          <p style={s.title}>PCB Designer & Embedded Systems Engineer</p>
          <p style={s.bio}>
            Experienced in designing multi-layer PCBs, schematic capture, and
            hardware development for IoT, industrial, and consumer electronics.
          </p>
          <a href="#contact" style={s.cta}>
            Let's Talk
          </a>

          <div style={s.social}>
            <span style={s.socialLabel}>Check Out My</span>
            <div style={s.socialIcons}>
              {/* LinkedIn */}
              <a href="#linkedin" style={s.socialLink} aria-label="LinkedIn">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="#00ffb3">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
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
              <a href="#hackaday" style={s.socialLink} aria-label="Hackaday">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#00ffb3" strokeWidth="1.8">
                  <rect x="2" y="3" width="20" height="18" rx="2"/>
                  <path d="M8 12h8M12 8v8"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div style={s.imageWrap}>
          <div style={s.hexagon}>
            <img
              src={Img}
              alt="Shuja Chaudhary"
              style={s.photo}
            />
          </div>
        </div>
      </section>
    </>
  );
}
