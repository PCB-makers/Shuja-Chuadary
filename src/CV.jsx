import React, { useState, useEffect } from "react";

export default function CV() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 768;

  const styles = {
    page: {
      backgroundColor: "#080d13",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      color: "#cdd6e0",
      fontFamily: "'DM Sans', sans-serif",
      width: "100%",
      overflowX: "hidden",
      boxSizing: "border-box",
    },
    main: {
      flex: 1,
      padding: isMobile ? "40px 5%" : "60px 10%",
      maxWidth: "1000px",
      margin: "0 auto",
      width: "100%",
      boxSizing: "border-box",
    },
    headerRow: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "flex-end",
      marginBottom: "50px",
      gap: "20px",
      width: "100%",
      boxSizing: "border-box",
    },
    header: {
      fontFamily: "'Syne', sans-serif",
      fontSize: isMobile ? "36px" : "48px",
      color: "#ffffff",
      margin: 0,
      lineHeight: "1.1",
    },
    subHeader: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: isMobile ? "16px" : "18px",
      color: "#7a8fa0",
      marginTop: "10px",
    },
    btnWrapper: {
      background: "linear-gradient(135deg, #00ffb3 0%, #5ecfa0 100%)",
      padding: "1px",
      borderRadius: "8px",
      width: isMobile ? "100%" : "auto",
      boxSizing: "border-box",
    },
    downloadBtn: {
      background: "#080d13",
      color: "#00ffb3",
      border: "none",
      padding: "12px 24px",
      borderRadius: "7px",
      fontFamily: "'Syne', sans-serif",
      fontWeight: "700",
      fontSize: "16px",
      cursor: "pointer",
      width: "100%",
      boxSizing: "border-box",
      transition: "all 0.3s",
    },
    section: {
      marginBottom: isMobile ? "40px" : "60px",
      width: "100%",
      boxSizing: "border-box",
    },
    sectionTitle: {
      fontFamily: "'Syne', sans-serif",
      fontSize: isMobile ? "24px" : "28px",
      color: "#fff",
      borderBottom: "1px solid rgba(0,255,180,0.2)",
      paddingBottom: "12px",
      marginBottom: "30px",
      position: "relative",
    },
    indicator: {
      position: "absolute",
      bottom: "-1px",
      left: 0,
      width: "60px",
      height: "2px",
      background: "#00ffb3",
    },
    summaryText: {
      fontSize: "16px",
      lineHeight: "1.8",
      color: "#aab4c0",
    },
    skillsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    skillCategory: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    skillTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#fff",
    },
    tagsWrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
    },
    tag: {
      background: "rgba(0,255,180,0.08)",
      border: "1px solid rgba(0,255,180,0.2)",
      color: "#00ffb3",
      padding: "8px 16px",
      borderRadius: "6px",
      fontSize: "14px",
    },
    timelineItem: {
      marginBottom: "40px",
      paddingLeft: "24px",
      borderLeft: "2px solid rgba(0,255,180,0.15)",
      position: "relative",
    },
    timelineDot: {
      position: "absolute",
      left: "-7px",
      top: "6px",
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      background: "#00ffb3",
      boxShadow: "0 0 10px rgba(0,255,180,0.5)",
    },
    itemHeaderRow: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "baseline",
      gap: isMobile ? "4px" : "10px",
      marginBottom: "8px",
    },
    itemTitle: {
      fontFamily: "'Syne', sans-serif",
      fontSize: isMobile ? "20px" : "22px",
      color: "#fff",
      margin: 0,
    },
    itemDate: {
      color: "#7a8fa0",
      fontSize: "15px",
      fontWeight: "500",
    },
    itemCompany: {
      color: "#00ffb3",
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "16px",
    },
    itemDescList: {
      color: "#aab4c0",
      lineHeight: "1.7",
      fontSize: "15px",
      paddingLeft: isMobile ? "16px" : "20px",
      margin: 0,
    },
    listItem: {
      marginBottom: "8px",
    }
  };

  return (
    <>
      {/* GLOBAL FIX: This kills the white scrolling gap universally across the page */}
      <style>{`
        html, body, #root {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          max-width: 100vw !important;
          overflow-x: hidden !important;
          background-color: #080d13 !important;
        }
        *, *::before, *::after {
          box-sizing: border-box !important;
        }
      `}</style>

      <div style={styles.page}>
        <main style={styles.main}>
          
          {/* --- HEADER --- */}
          <div style={styles.headerRow}>
            <div>
              <h1 style={styles.header}>Shuja <span style={{ color: "#00ffb3" }}>Chaudary</span></h1>
              <div style={styles.subHeader}>PCB Designer & Embedded Systems Engineer</div>
            </div>
            <div style={styles.btnWrapper}>
              <button 
                style={styles.downloadBtn} 
                onMouseEnter={(e) => e.target.style.background = 'rgba(0,255,180,0.1)'} 
                onMouseLeave={(e) => e.target.style.background = '#080d13'}
                onClick={() => alert("Link this to your actual PDF file!")}
              >
                Download PDF
              </button>
            </div>
          </div>

          {/* --- PROFESSIONAL SUMMARY --- */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              Professional Profile
              <span style={styles.indicator} />
            </h2>
            <p style={styles.summaryText}>
              Innovative and detail-oriented Hardware Engineer with extensive experience in PCB layout, schematic capture, and embedded systems development. Proven track record of designing reliable, high-performance hardware for IoT, industrial, and consumer electronics. Expert in balancing signal integrity, thermal management, and strict form-factor constraints.
            </p>
          </section>

          {/* --- SKILLS --- */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              Core Competencies
              <span style={styles.indicator} />
            </h2>
            
            <div style={styles.skillsContainer}>
              <div style={styles.skillCategory}>
                <div style={styles.skillTitle}>Hardware Design & PCB CAD</div>
                <div style={styles.tagsWrapper}>
                  <span style={styles.tag}>Altium Designer</span>
                  <span style={styles.tag}>KiCad</span>
                  <span style={styles.tag}>Eagle</span>
                  <span style={styles.tag}>Multi-layer Routing</span>
                  <span style={styles.tag}>High-Speed Design</span>
                  <span style={styles.tag}>Rigid-Flex Boards</span>
                </div>
              </div>

              <div style={styles.skillCategory}>
                <div style={styles.skillTitle}>Embedded Systems & Firmware</div>
                <div style={styles.tagsWrapper}>
                  <span style={styles.tag}>C / C++</span>
                  <span style={styles.tag}>ARM Cortex-M</span>
                  <span style={styles.tag}>ESP32 / ESP8266</span>
                  <span style={styles.tag}>RTOS</span>
                  <span style={styles.tag}>I2C / SPI / UART / CAN</span>
                </div>
              </div>

              <div style={styles.skillCategory}>
                <div style={styles.skillTitle}>Analysis & Prototyping</div>
                <div style={styles.tagsWrapper}>
                  <span style={styles.tag}>Signal Integrity Analysis</span>
                  <span style={styles.tag}>Oscilloscopes & Logic Analyzers</span>
                  <span style={styles.tag}>SMD Soldering</span>
                  <span style={styles.tag}>BOM Management</span>
                </div>
              </div>
            </div>
          </section>

          {/* --- EXPERIENCE --- */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              Experience
              <span style={styles.indicator} />
            </h2>
            
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot} />
              <div style={styles.itemHeaderRow}>
                <h3 style={styles.itemTitle}>Senior Hardware Engineer</h3>
                <div style={styles.itemDate}>Jan 2022 - Present</div>
              </div>
              <div style={styles.itemCompany}>TechTronics Inc. | Rawalpindi, PK</div>
              <ul style={styles.itemDescList}>
                <li style={styles.listItem}>Led the hardware design cycle from concept to mass production for IoT smart home hubs, including schematic capture and 4-layer HDI PCB layout.</li>
                <li style={styles.listItem}>Optimized power distribution networks (PDN) and resolved complex signal integrity issues for high-speed DDR memory interfaces.</li>
                <li style={styles.listItem}>Collaborated closely with the firmware team to ensure seamless hardware/software integration and bring-up testing.</li>
              </ul>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.timelineDot} />
              <div style={styles.itemHeaderRow}>
                <h3 style={styles.itemTitle}>Embedded Systems Developer</h3>
                <div style={styles.itemDate}>Aug 2019 - Dec 2021</div>
              </div>
              <div style={styles.itemCompany}>InnovateX Solutions | Islamabad, PK</div>
              <ul style={styles.itemDescList}>
                <li style={styles.listItem}>Designed ultra-compact rigid-flex boards for wearable biometric sensors with a focus on strict low-power constraints.</li>
                <li style={styles.listItem}>Developed bare-metal C code and FreeRTOS tasks for ARM Cortex microcontrollers to handle sensor data acquisition.</li>
                <li style={styles.listItem}>Generated and managed manufacturing files (Gerber, NC Drill, Pick & Place) and communicated directly with fabrication houses.</li>
              </ul>
            </div>
          </section>

          {/* --- EDUCATION --- */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              Education
              <span style={styles.indicator} />
            </h2>
            
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot} />
              <div style={styles.itemHeaderRow}>
                <h3 style={styles.itemTitle}>Bachelor of Science in Computer Engineering</h3>
                <div style={styles.itemDate}>2022 - 2026</div>
              </div>
              <div style={styles.itemCompany}>COMSATS University Islamabad</div>
              <ul style={styles.itemDescList}>
                <li style={styles.listItem}>Specialization in Embedded Systems and Microelectronics.</li>
                <li style={styles.listItem}>Final Year Project: "Autonomous Drone Navigation Hardware" – Designed a custom flight controller PCB integrating IMU sensors and GPS.</li>
              </ul>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}