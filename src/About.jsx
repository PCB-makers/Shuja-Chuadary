import React from "react";
import Img from "./Assets/IMG_0684.JPG.jpeg";


const styles = {
  page: {
    backgroundColor: "#080d13",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    color: "#cdd6e0",
    fontFamily: "'DM Sans', sans-serif",
  },
  main: {
    flex: 1,
    padding: "80px 10%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "48px",
    color: "#ffffff",
    marginBottom: "20px",
    textAlign: "center",
  },
  accent: {
    color: "#00ffb3",
  },
  contentWrapper: {
    display: "flex",
    gap: "60px",
    maxWidth: "1100px",
    width: "100%",
    marginTop: "40px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  imageBox: {
    flex: "1 1 400px",
    height: "500px",
    borderRadius: "16px",
    background: "linear-gradient(145deg, #0a2a1e 0%, #0d1117 55%, #0e2419 100%)",
    border: "2px solid rgba(0,255,180,0.3)",
    boxShadow: "0 0 30px rgba(0,255,180,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textSection: {
    flex: "1 1 500px",
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#aab4c0",
  },
  highlightBox: {
    marginTop: "30px",
    padding: "24px",
    background: "#131a24",
    borderLeft: "4px solid #00ffb3",
    borderRadius: "0 8px 8px 0",
  }
};

export default function About() {
  return (
    <div style={styles.page}>
    
      <main style={styles.main}>
        <h1 style={styles.header}>About <span style={styles.accent}>Me</span></h1>
        
        <div style={styles.contentWrapper}>
          <div style={{ ...styles.imageBox, overflow: "hidden" }}>
  <img
    src={Img}
    alt="Shuja Chaudhary"
    style={{ 
      width: "100%", 
      height: "110%", 
           // Keeps the aspect ratio perfect
      borderRadius: "14px"    // Rounds the corners to match the border
    }} 
  />
</div>
          
          <div style={styles.textSection}>
            <p style={{ marginBottom: "20px" }}>
              Hello, I'm <strong style={{ color: "#fff" }}>Shuja Chaudary</strong>. I am a passionate PCB designer and embedded systems engineer dedicated to crafting reliable, high-performance hardware solutions.
            </p>
            <p style={{ marginBottom: "20px" }}>
              With a deep understanding of hardware architecture, I specialize in transforming complex requirements into functional, optimized, and scalable electronic designs. From IoT devices to industrial controls, I bridge the gap between schematic capture and physical deployment.
            </p>
            <div style={styles.highlightBox}>
              <h3 style={{ fontFamily: "'Syne', sans-serif", color: "#fff", marginBottom: "10px", fontSize: "20px" }}>My Mission</h3>
              <p style={{ fontSize: "16px", margin: 0 }}>
                To innovate at the intersection of hardware and software, ensuring signal integrity, power efficiency, and robust firmware integration for next-generation electronics.
              </p>
            </div>
          </div>
        </div>
      </main>
    
    </div>
  );
}