"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const StudioCard = ({ title, desc, i }) => {
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-80, 80], [3, -3]), {
    stiffness: 160,
    damping: 24,
  });
  const ry = useSpring(useTransform(mx, [-80, 80], [-3, 3]), {
    stiffness: 160,
    damping: 24,
  });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  const row = Math.floor(i / 3);
  const col = i % 3;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=Poppins:wght@300;400;600&display=swap');

        .sc-wrap {
          perspective: 1000px;
          padding: 1px;
          height: 100%;
        }

        .sc-card {
          position: relative;
          height: 100%;
          min-height: 260px;
          background: #0f0f0f;
          border: 1px solid rgba(255,255,255,0.07);
          display: flex;
          flex-direction: column;
          padding: 32px 30px 28px;
          gap: 0;
          cursor: default;
          overflow: hidden;
          transform-style: preserve-3d;
        }

        /* top line that expands on hover */
        .sc-topline {
          position: absolute;
          top: 0; left: 0;
          height: 1px;
          background: #ffffff;
          width: 0;
          transition: width 0.45s cubic-bezier(0.77,0,0.18,1);
        }
        .sc-card:hover .sc-topline { width: 100%; }

        /* index */
        .sc-num {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.28em;
          color: rgba(255,255,255,0.18);
          margin-bottom: 28px;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sc-num::after {
          content: '';
          display: block;
          flex: 1;
          max-width: 32px;
          height: 1px;
          background: rgba(255,255,255,0.1);
          transition: background 0.3s, max-width 0.4s;
        }
        .sc-card:hover .sc-num { color: rgba(255,255,255,0.55); }
        .sc-card:hover .sc-num::after { background: rgba(255,255,255,0.3); max-width: 48px; }

        /* title */
        .sc-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: rgba(255,255,255,0.88);
          line-height: 1.2;
          margin: 0 0 16px;
          transition: color 0.3s;
        }
        .sc-card:hover .sc-title { color: #ffffff; }

        /* desc */
        .sc-desc {
          font-family: 'Poppins', sans-serif;
          font-size: 0.82rem;
          font-weight: 300;
          color: rgba(255,255,255,0.3);
          line-height: 1.75;
          flex: 1;
          transition: color 0.35s;
        }
        .sc-card:hover .sc-desc { color: rgba(255,255,255,0.52); }

        /* bottom row */
        .sc-bottom {
          margin-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* arrow */
        .sc-arrow {
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.3s, transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .sc-card:hover .sc-arrow { opacity: 1; transform: translateX(0); }
        .sc-arrow-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.56rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }
        .sc-arrow svg { color: rgba(255,255,255,0.5); }

        /* corner dot — static, white only */
        .sc-corner-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          transition: background 0.3s;
          flex-shrink: 0;
        }
        .sc-card:hover .sc-corner-dot { background: rgba(255,255,255,0.5); }

        /* subtle inner shadow on hover */
        .sc-card::after {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0);
          transition: box-shadow 0.35s;
          pointer-events: none;
        }
        .sc-card:hover::after {
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
        }

        @media (max-width: 640px) {
          .sc-card { min-height: 200px; padding: 24px 22px 20px; }
          .sc-title { font-size: 1rem; }
        }
      `}</style>

      <motion.div
        className="sc-wrap"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: row * 0.07 + col * 0.05,
        }}
      >
        <motion.div
          className="sc-card"
          style={{ rotateX: rx, rotateY: ry }}
          onMouseMove={onMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={onLeave}
          animate={{
            borderColor: hovered
              ? "rgba(255,255,255,0.14)"
              : "rgba(255,255,255,0.07)",
            backgroundColor: hovered ? "#141414" : "#0f0f0f",
          }}
          transition={{ duration: 0.35 }}
        >
          <div className="sc-topline" />

          <div className="sc-num">{String(i + 1).padStart(2, "0")}</div>

          <h4 className="sc-title">{title}</h4>
          <p className="sc-desc">{desc}</p>

          <div className="sc-bottom">
            <div className="sc-arrow">
              <span className="sc-arrow-label">Explore</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 8h12M9 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="sc-corner-dot" />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default StudioCard;
