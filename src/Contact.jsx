import React, { useState, useEffect } from "react";

export default function Contact() {
  const [focus, setFocus] = useState(null);
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
      width: "100%",             // Ensure it doesn't stretch past the screen
      overflowX: "hidden",       // Kills the white space on the right
      boxSizing: "border-box",
    },
    main: {
      flex: 1,
      padding: isMobile ? "40px 5%" : "80px 10%",
      maxWidth: "1200px",
      margin: "0 auto",
      width: "100%",
      boxSizing: "border-box",   // Keeps padding inside the width
    },
    header: {
      fontFamily: "'Syne', sans-serif",
      fontSize: isMobile ? "36px" : "48px",
      color: "#ffffff",
      marginBottom: "10px",
    },
    subHeader: {
      color: "#7a8fa0",
      marginBottom: isMobile ? "40px" : "60px",
      fontSize: isMobile ? "16px" : "18px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1.5fr",
      gap: isMobile ? "40px" : "60px",
      alignItems: "start",
      width: "100%",
      boxSizing: "border-box",
    },
    infoBox: {
      background: "#131a24",
      padding: isMobile ? "30px 20px" : "40px",
      borderRadius: "16px",
      border: "1px solid rgba(0,255,180,0.1)",
      boxSizing: "border-box",   // Fixes info box overflow
    },
    infoTitle: {
      fontFamily: "'Syne', sans-serif",
      fontSize: "24px",
      color: "#fff",
      marginBottom: "30px",
    },
    contactRow: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "24px",
    },
    iconWrapper: {
      width: "48px",
      height: "48px",
      borderRadius: "12px",
      background: "rgba(0,255,180,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#00ffb3",
      flexShrink: 0,
    },
    infoText: {
      fontSize: "16px",
      color: "#aab4c0",
      wordBreak: "break-word",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
      boxSizing: "border-box",
    },
    inputGroupRow: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "20px",
      width: "100%",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      flex: 1,
      width: "100%",
    },
    label: {
      fontSize: "14px",
      color: "#fff",
      fontWeight: "500",
    },
    input: {
      background: "#131a24",
      border: "1px solid rgba(0,255,180,0.2)",
      borderRadius: "8px",
      padding: "16px",
      color: "#cdd6e0",
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "15px",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",   // VERY IMPORTANT: Keeps inputs from overflowing
      transition: "border-color 0.3s",
    },
    textarea: {
      background: "#131a24",
      border: "1px solid rgba(0,255,180,0.2)",
      borderRadius: "8px",
      padding: "16px",
      color: "#cdd6e0",
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "15px",
      outline: "none",
      width: "100%",
      minHeight: "150px",
      resize: "vertical",
      boxSizing: "border-box",   // VERY IMPORTANT: Keeps textarea from overflowing
      transition: "border-color 0.3s",
    },
    submitBtn: {
      background: "#00ffb3",
      color: "#0d1117",
      border: "none",
      borderRadius: "8px",
      padding: "16px 32px",
      fontFamily: "'Syne', sans-serif",
      fontSize: "16px",
      fontWeight: "800",
      cursor: "pointer",
      marginTop: "10px",
      alignSelf: isMobile ? "stretch" : "flex-start",
      transition: "transform 0.2s, box-shadow 0.2s",
    }
  };
  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <h1 style={styles.header}>Get In <span style={{ color: "#00ffb3" }}>Touch</span></h1>
        <p style={styles.subHeader}>Have a project in mind or want to discuss hardware solutions? Let's talk.</p>
        
        <div style={styles.grid}>
          
          <div style={styles.infoBox}>
            <h3 style={styles.infoTitle}>Contact Information</h3>
            
            <div style={styles.contactRow}>
              <div style={styles.iconWrapper}>
                <span>📍</span>
              </div>
              <div style={styles.infoText}>Rawalpindi, Punjab, Pakistan</div>
            </div>

            <div style={styles.contactRow}>
              <div style={styles.iconWrapper}>
                <span>✉️</span>
              </div>
              <div style={styles.infoText}>shuja@pcbdesign.com</div>
            </div>

            <div style={styles.contactRow}>
              <div style={styles.iconWrapper}>
                <span>📞</span>
              </div>
              <div style={styles.infoText}>+92 300 0000000</div>
            </div>
          </div>

          <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div style={styles.inputGroupRow}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Name</label>
                <input 
                  style={{...styles.input, borderColor: focus === 'name' ? '#00ffb3' : 'rgba(0,255,180,0.2)'}} 
                  type="text" 
                  placeholder="Your Name" 
                  onFocus={() => setFocus('name')} 
                  onBlur={() => setFocus(null)}
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email</label>
                <input 
                  style={{...styles.input, borderColor: focus === 'email' ? '#00ffb3' : 'rgba(0,255,180,0.2)'}} 
                  type="email" 
                  placeholder="Your Email"
                  onFocus={() => setFocus('email')} 
                  onBlur={() => setFocus(null)}
                />
              </div>
            </div>
            
            <div style={styles.inputGroup}>
              <label style={styles.label}>Subject</label>
              <input 
                style={{...styles.input, borderColor: focus === 'subject' ? '#00ffb3' : 'rgba(0,255,180,0.2)'}} 
                type="text" 
                placeholder="Project Subject"
                onFocus={() => setFocus('subject')} 
                onBlur={() => setFocus(null)}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Message</label>
              <textarea 
                style={{...styles.textarea, borderColor: focus === 'message' ? '#00ffb3' : 'rgba(0,255,180,0.2)'}} 
                placeholder="Tell me about your project requirements..."
                onFocus={() => setFocus('message')} 
                onBlur={() => setFocus(null)}
              />
            </div>

            <button 
              type="submit" 
              style={styles.submitBtn}
              onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 5px 15px rgba(0,255,180,0.3)'; }}
              onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
            >
              Send Message
            </button>
          </form>

        </div>
      </main>
    </div>
  );
}