"use client";
import React from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   Drop-in replacement for the blog cards row.
   Props: blogs (array), isBlog (bool)
   Background: .bg-secondaryBg — unchanged
───────────────────────────────────────────── */

const BlogCards = ({ blogs = [], isBlog = false }) => {
  const visibleBlogs = isBlog ? blogs : blogs.slice(0, 4);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&display=swap');

        /* ── section wrapper ── */
        .bc-section {
          width: 100%;
          padding: 0;
        }

        /* ── header row ── */
        .bc-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          margin-bottom: 40px;
          gap: 16px;
          flex-wrap: wrap;
        }

        .bc-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.35);
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .bc-eyebrow::before {
          content: '';
          width: 18px;
          height: 1px;
          background: rgba(0,0,0,0.3);
        }

        /* headline: font-Renoric preserved, size unchanged */
        .bc-headline {
          font-family: 'Renoric', 'Impact', 'Arial Black', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          letter-spacing: -2px;
          line-height: 1.05;
          color: inherit;
          margin: 0;
        }

        .bc-count {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.3);
          white-space: nowrap;
          padding-bottom: 4px;
        }

        /* ── grid ── */
        .bc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        /* ── single card ── */
        .bc-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.09);
          min-height: 323px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 28px 24px 24px;
          overflow: hidden;
          cursor: default;
          transition:
            border-color 0.35s ease,
            box-shadow 0.35s ease,
            background 0.35s ease;
        }

        .bc-card:hover {
          background: #fafafa;
          border-color: rgba(0,0,0,0.18);
          box-shadow: 0 12px 48px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06);
        }

        /* top expand line */
        .bc-card-topline {
          position: absolute;
          top: 0; left: 0;
          height: 2px;
          background: #0a0a0a;
          width: 0;
          transition: width 0.5s cubic-bezier(0.77,0,0.18,1);
        }
        .bc-card:hover .bc-card-topline { width: 100%; }

        /* card index tag — top right */
        .bc-card-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          font-family: 'DM Mono', monospace;
          font-size: 0.56rem;
          letter-spacing: 0.2em;
          color: rgba(0,0,0,0.2);
          transition: color 0.3s;
        }
        .bc-card:hover .bc-card-tag { color: rgba(0,0,0,0.45); }

        /* card body */
        .bc-card-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding-right: 28px;
        }

        /* title: font-Renoric preserved */
        .bc-card-title {
          font-family: 'Renoric', 'Impact', 'Arial Black', sans-serif;
          font-size: 1.35rem;
          line-height: 1.15;
          color: #0a0a0a;
          margin: 0;
          transition: color 0.3s;
        }

        /* desc: unchanged styling */
        .bc-card-desc {
          font-size: 0.83rem;
          line-height: 1.7;
          color: rgba(0,0,0,0.5);
          margin: 0;
          transition: color 0.3s;
          flex: 1;
        }
        .bc-card:hover .bc-card-desc { color: rgba(0,0,0,0.65); }

        /* bottom row */
        .bc-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(0,0,0,0.07);
          transition: border-color 0.3s;
        }
        .bc-card:hover .bc-card-bottom { border-color: rgba(0,0,0,0.12); }

        /* number badge — bg-black text-white preserved */
        .bc-badge {
          background: #0a0a0a;
          color: #ffffff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: fantasy, sans-serif;
          font-size: 0.95rem;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s;
        }
        .bc-card:hover .bc-badge {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        /* read indicator */
        .bc-read {
          font-family: 'DM Mono', monospace;
          font-size: 0.54rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.3s, transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .bc-card:hover .bc-read {
          opacity: 1;
          transform: translateX(0);
        }
        .bc-read svg { flex-shrink: 0; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .bc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .bc-grid { grid-template-columns: 1fr; gap: 10px; }
          .bc-card { min-height: 240px; padding: 22px 20px 20px; }
          .bc-header { margin-bottom: 28px; }
          .bc-headline { font-size: 1.9rem; letter-spacing: -1px; }
        }
      `}</style>

      <div className="bc-section">
        {/* ── HEADER ── */}
        <motion.div
          className="bc-header my-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="bc-eyebrow">Why us</div>
            <h2 className="bc-headline">
              Here&apos;s why Unit 45 Fitness Centre is
              <br />
              the best Gym in Kochi:
            </h2>
          </div>
          <div className="bc-count">
            {String(visibleBlogs.length).padStart(2, "0")} Reasons
          </div>
        </motion.div>

        {/* ── CARDS GRID ── */}
        <div className="bc-grid">
          {visibleBlogs.map((blog, i) => (
            <motion.div
              key={i}
              className="bc-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.58,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 4) * 0.07,
              }}
            >
              <div className="bc-card-topline" />
              <span className="bc-card-tag">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="bc-card-body">
                <h4 className="bc-card-title font-Renoric">
                  {blog?.blogTitle}
                </h4>
                <p className="bc-card-desc">{blog?.blogeDescs}</p>
              </div>

              <div className="bc-card-bottom">
                <div className="bc-badge">{i + 1}</div>
                <div className="bc-read">
                  Read
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M2 8h12M9 3l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogCards;
