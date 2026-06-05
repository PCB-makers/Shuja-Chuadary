import React, { useState } from "react";


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
  },
  header: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "48px",
    color: "#ffffff",
    marginBottom: "10px",
    textAlign: "center",
  },
  subHeader: {
    textAlign: "center",
    color: "#7a8fa0",
    marginBottom: "60px",
    fontSize: "18px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    background: "#131a24",
    border: "1px solid rgba(0,255,180,0.1)",
    borderRadius: "12px",
    overflow: "hidden",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  cardImage: {
    height: "200px",
    background: "#0d1117",
    borderBottom: "1px solid rgba(0,255,180,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#7a8fa0",
  },
  cardContent: {
    padding: "24px",
  },
  cardTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "22px",
    color: "#fff",
    marginBottom: "12px",
  },
  cardDesc: {
    fontSize: "15px",
    color: "#aab4c0",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  tagContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  tag: {
    fontSize: "12px",
    padding: "6px 12px",
    background: "rgba(0,255,180,0.1)",
    color: "#00ffb3",
    borderRadius: "20px",
    border: "1px solid rgba(0,255,180,0.2)",
  }
};

const projectsData = [
  { id: 1, title: "IoT Smart Hub PCB", desc: "A 4-layer HDI board featuring integrated Wi-Fi/BLE, power management, and sensor interfacing for home automation.", tags: ["Altium", "HDI", "IoT"] },
  { id: 2, title: "Industrial Motor Controller", desc: "High-power motor driver schematic and layout focusing on thermal management and strict signal integrity constraints.", tags: ["KiCad", "Power Electronics"] },
  { id: 3, title: "Wearable Health Monitor", desc: "Ultra-compact rigid-flex design with biometric sensors and optimized battery consumption profiles.", tags: ["Rigid-Flex", "Wearable", "Low-Power"] },
];

export default function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.page}>
    
      <main style={styles.main}>
        <h1 style={styles.header}>Recent <span style={{ color: "#00ffb3" }}>Projects</span></h1>
        <p style={styles.subHeader}>A selection of my recent hardware designs and embedded solutions.</p>
        
        <div style={styles.grid}>
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              style={{
                ...styles.card,
                transform: hoveredCard === project.id ? "translateY(-8px)" : "translateY(0)",
                boxShadow: hoveredCard === project.id ? "0 10px 30px rgba(0,255,180,0.15)" : "none",
                borderColor: hoveredCard === project.id ? "rgba(0,255,180,0.4)" : "rgba(0,255,180,0.1)",
              }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.cardImage}>[ Project Image ]</div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={styles.cardDesc}>{project.desc}</p>
                <div style={styles.tagContainer}>
                  {project.tags.map(tag => (
                    <span key={tag} style={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
    </div>
  );
}