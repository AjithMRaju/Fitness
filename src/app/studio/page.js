"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import StudioCard from "@/Components/Card/StudioCard";
import { studioData2 } from "@/Utils/data";
import { TextParallaxContentExample } from "@/Components/Testing";

/* ─ tiny helper: staggered fade-up ─ */
const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Studio = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgShift = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&display=swap');

        .studio-section {
          position: relative;
          background: #0a0a0a;
          overflow: hidden;
        }

        /* subtle dot-grid texture */
        .studio-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 0;
        }

        /* ── INTRO BLOCK ── */
        .studio-intro-wrap {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        /* left: dark panel */
        .studio-intro-left {
          background: #0a0a0a;
          padding: 80px 56px 72px;
          border-right: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .studio-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          color: #c8f135;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .studio-eyebrow::before {
          content: '';
          width: 18px;
          height: 1px;
          background: #c8f135;
        }

        .studio-headline {
          font-family: 'poppins', sans-serif;
          font-size: clamp(2.8rem, 5.5vw, 5rem);
          font-weight: 700;
          line-height: 1.0;
          color: #f0f0f0;
          margin: 0;
        }
        .studio-headline .hl-red { color: #c8f135; }

        /* right: white panel with body text */
        .studio-intro-right {
      
          padding: 80px 56px 72px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .studio-intro-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.25em;
          color: rgba(10,10,10,0.3);
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .studio-body-text {
          font-family: 'poppins', sans-serif;
          font-size: clamp(0.9rem, 1.4vw, 1.05rem);
          font-weight: 300;
          line-height: 1.75;
          color: rgba(10,10,10,0.6);
          max-width: 420px;
        }

        .studio-body-text strong {
          color: #0a0a0a;
          font-weight: 600;
        }

        /* scroll indicator */
        .scroll-indicator {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 40px;
        }
        .scroll-line {
          width: 32px;
          height: 1px;
          background: rgba(10,10,10,0.2);
        }
        .scroll-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.56rem;
          letter-spacing: 0.2em;
          color: rgba(10,10,10,0.3);
          text-transform: uppercase;
        }

        /* ── PARALLAX ZONE ── */
        .studio-parallax-zone {
          position: relative;
          z-index: 1;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        /* ── OFFERINGS BLOCK ── */
        .studio-offerings {
          position: relative;
          z-index: 1;
          padding: 80px 0 100px;
        }

        .offerings-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          padding: 0 48px 48px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          margin-bottom: 48px;
          gap: 24px;
        }

        .offerings-title-wrap {}

        .offerings-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.28em;
          color: rgba(255,255,255,0.22);
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .offerings-title {
          font-family: 'poppins', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4.5rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 0.95;
          margin: 0;
        }
        .offerings-title span {
          -webkit-text-stroke: 1px rgba(255,255,255,0.35);
          color: transparent;
        }

        .offerings-count {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.2);
          text-transform: uppercase;
          text-align: right;
          padding-bottom: 4px;
        }

        /* card grid */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          padding: 0 42px;
          border-left: 1px solid rgba(255,255,255,0.05);
          border-right: 1px solid rgba(255,255,255,0.05);
          margin: 0 6px;
        }

        /* each card cell gets a right border except last in row */
        .card-cell {
          border-right: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .card-cell:nth-child(3n) { border-right: none; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .studio-intro-wrap { grid-template-columns: 1fr; }
          .studio-intro-left { padding: 60px 28px 48px; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .studio-intro-right { padding: 48px 28px 56px; }
          .cards-grid { grid-template-columns: repeat(2, 1fr); padding: 0 20px; }
          .card-cell:nth-child(3n) { border-right: 1px solid rgba(255,255,255,0.05); }
          .card-cell:nth-child(2n) { border-right: none; }
          .offerings-header { padding: 0 20px 36px; flex-direction: column; grid-template-columns: 1fr; }
        }
        @media (max-width: 580px) {
          .cards-grid { grid-template-columns: 1fr; padding: 0 16px; }
          .card-cell { border-right: none !important; }
          .offerings-header { padding: 0 16px 28px; }
          .studio-intro-left { padding: 48px 20px 40px; }
          .studio-intro-right { padding: 40px 20px 48px; }
        }
      `}</style>

      <section className="studio-section" id="studio" ref={sectionRef}>
        {/* ── INTRO: dark-left / white-right split ── */}
        <div className="studio-intro-wrap">
          {/* LEFT — dark, big headline */}
          <FadeUp className="studio-intro-left" delay={0}>
            <div className="studio-eyebrow">About the Studio</div>
            <h1 className="studio-headline">
              <span className="hl-red">Your Brand</span>
              <br />
              is an
              <br />
              Exclusive
              <br />
              Space.
            </h1>
          </FadeUp>

          {/* RIGHT — white, body copy */}
          <FadeUp className="studio-intro-right bg-secondaryBg " delay={0.12}>
            <div className="studio-intro-tag">Unit45 Fitness · Studio</div>
            <p className="studio-body-text">
              <strong>Your Brand</strong> is an exclusive space crafted to
              complement the mission of Unit45 Fitness. Offering specialized
              fitness programs, group classes, and wellness initiatives, Unit 45
              Studio is where <strong>passion meets performance</strong>.
              Whether you&apos;re seeking to elevate your training, find your
              zen, or connect with a community that motivates and inspires —
              this studio is designed to{" "}
              <strong>empower you every step of the way</strong>.
            </p>
            <div className="scroll-indicator">
              <div className="scroll-line" />
              <span className="scroll-label">Explore below</span>
            </div>
          </FadeUp>
        </div>

        {/* ── PARALLAX COMPONENT — unchanged position ── */}
        <div className="studio-parallax-zone">
          <TextParallaxContentExample />
        </div>

        {/* ── CORE OFFERINGS ── */}
        <div className="studio-offerings">
          <div className="offerings-header">
            <div className="offerings-title-wrap">
              <FadeUp delay={0}>
                <div className="offerings-eyebrow">What we offer</div>
                <h2 className="offerings-title">
                  Core
                  <br />
                  <span>Offerings</span>
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.1}>
              <div className="offerings-count">
                {String(studioData2.length).padStart(2, "0")} Programs
              </div>
            </FadeUp>
          </div>

          <div className="cards-grid">
            {studioData2.map((card, i) => (
              <div className="card-cell" key={i}>
                <StudioCard {...card} i={i} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Studio;
