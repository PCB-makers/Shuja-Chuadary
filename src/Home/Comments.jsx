// ============================================================
//  Testimonials.jsx  —  PCB Designer Portfolio
//  Layout matches reference design: 3-card grid, teal nav,
//  star ratings, avatar row, paginator dots.
//
//  HOW TO CUSTOMISE:
//  • Edit the `testimonials` array below to add/change reviews.
//  • Each entry: { id, name, title, company, rating (1-5), text, initials }
// ============================================================

import { useState } from "react";

/* ---------- DATA ---------- */
const testimonials = [
  {
    id: 1,
    initials: "AK",
    name: "Ahmed Khalil",
    title: "Senior Hardware Engineer",
    company: "TechEdge Systems",
    rating: 5,
    text: "Outstanding multi-layer PCB layouts. Every impedance-controlled trace was spot-on, and the BGA fanout on our high-speed DDR4 design was handled perfectly. Zero rework after fab.",
  },
  {
    id: 2,
    initials: "SC",
    name: "Sara Chen",
    title: "Lead EE — IoT Division",
    company: "NexaElectronics",
    rating: 4,
    text: "Delivered a compact 6-layer RF board under a very tight deadline. DFM rules were strictly followed and signal integrity analysis confirmed clean results. Will definitely work again.",
  },
  {
    id: 3,
    initials: "RW",
    name: "Robert Wagner",
    title: "Product Manager",
    company: "PowerCore GmbH",
    rating: 5,
    text: "The power electronics layout exceeded our expectations. Thermal vias and copper pours were optimised beautifully — board runs cool even at 100 % load without a heatsink.",
  },
  {
    id: 4,
    initials: "FA",
    name: "Fatima Al-Rashid",
    title: "R&D Director",
    company: "MedDevice Labs",
    rating: 5,
    text: "Medical-grade design that passed IPC-A-610 Class III review on the first attempt. Excellent isolation creepage distances and clean documentation package for regulatory submission.",
  },
  {
    id: 5,
    initials: "JO",
    name: "James Okafor",
    title: "CTO",
    company: "Aerotech PCB",
    rating: 4,
    text: "Aerospace-grade precision throughout. The stackup was optimised for our EMI budget and the RF shield via stitching was exactly what our signal-integrity team specified.",
  },
];

/* ---------- STAR COMPONENT ---------- */
function Stars({ count }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          width={14}
          height={14}
          viewBox="0 0 24 24"
          fill={n <= count ? "#f59e0b" : "none"}
          stroke={n <= count ? "#f59e0b" : "#4b5a6e"}
          strokeWidth={2}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

/* ---------- MAIN COMPONENT ---------- */
export default function Testimonials() {
  const [page, setPage] = useState(0); // index of first visible card
  const PER_PAGE = 3;
  const total = testimonials.length;

  const prev = () => setPage((p) => (p - 1 + total) % total);
  const next = () => setPage((p) => (p + 1) % total);

  // Pick 3 cards starting from `page`
  const visible = [0, 1, 2].map((i) => testimonials[(page + i) % total]);

  return (
    <>
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .tm-section {
          background: "#0d1117";
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 60px;
          font-family: 'Nunito Sans', sans-serif;
        }

        .tm-inner {
          width: 100%;
          max-width: 1100px;
        }

        /* ── Header row ── */
        .tm-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 40px;
        }

        .tm-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #4dd9c0;
          margin-bottom: 10px;
        }

        .tm-title {
          font-size: 38px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
        }

        /* ── Nav buttons ── */
        .tm-nav {
          display: flex;
          gap: 10px;
          padding-bottom: 6px;
        }

        .tm-nav-btn {
          width: 44px;
          height: 28px;
          border-radius: 20px;
          background: #4dd9c0;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f1923;
          font-size: 16px;
          font-weight: 700;
          transition: background 0.2s, transform 0.1s;
          line-height: 1;
        }

        .tm-nav-btn:hover { background: #2ec4aa; }
        .tm-nav-btn:active { transform: scale(0.95); }

        /* ── Cards grid ── */
        .tm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 36px;
        }

        /* ── Single card ── */
        .tm-card {
          background: #1a2740;
          border-radius: 10px;
          padding: 26px 22px 22px;
          border: 1px solid rgba(77, 217, 192, 0.08);
          transition: border-color 0.25s, transform 0.25s;
        }

        .tm-card:hover {
          border-color: rgba(77, 217, 192, 0.3);
          transform: translateY(-3px);
        }

        .tm-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .tm-quote {
          font-size: 36px;
          color: #4dd9c0;
          line-height: 0.8;
          font-family: Georgia, serif;
          margin-top: 4px;
        }

        .tm-text {
          font-size: 13px;
          color: #8fa3bc;
          line-height: 1.75;
          margin-bottom: 20px;
        }

        .tm-divider {
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin-bottom: 16px;
        }

        .tm-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .tm-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #4dd9c0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          color: #0f1923;
          flex-shrink: 0;
          letter-spacing: 0.5px;
        }

        .tm-author-name {
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2px;
        }

        .tm-author-role {
          font-size: 12px;
          color: #8fa3bc;
        }

        /* ── Dots ── */
        .tm-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        .tm-dot {
          height: 8px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
        }

        .tm-dot-active {
          width: 24px;
          background: #4dd9c0;
        }

        .tm-dot-inactive {
          width: 8px;
          background: #2a3f56;
        }

        @media (max-width: 800px) {
          .tm-grid { grid-template-columns: 1fr; }
          .tm-section { padding: 40px 20px; }
          .tm-title { font-size: 28px; }
        }
      `}</style>

      <section className="tm-section">
        <div className="tm-inner">

          {/* ── Header ── */}
          <div className="tm-header">
            <div>
              <p className="tm-label">Testimonials</p>
              <h2 className="tm-title">What Clients Say</h2>
            </div>
            <div className="tm-nav">
              <button className="tm-nav-btn" onClick={prev} aria-label="Previous">&#8249;</button>
              <button className="tm-nav-btn" onClick={next} aria-label="Next">&#8250;</button>
            </div>
          </div>

          {/* ── Cards ── */}
          <div className="tm-grid">
            {visible.map((t) => (
              <div className="tm-card" key={t.id}>
                <div className="tm-card-top">
                  <span className="tm-quote">"</span>
                  <Stars count={t.rating} />
                </div>

                <p className="tm-text">{t.text}</p>

                <div className="tm-divider" />

                <div className="tm-author">
                  <div className="tm-avatar">{t.initials}</div>
                  <div>
                    <p className="tm-author-name">{t.name}</p>
                    <p className="tm-author-role">{t.title} — {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Dots ── */}
          <div className="tm-dots" role="tablist" aria-label="Testimonial pages">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === page}
                aria-label={`Go to testimonial ${i + 1}`}
                className={i === page ? "tm-dot tm-dot-active" : "tm-dot tm-dot-inactive"}
                onClick={() => setPage(i)}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
