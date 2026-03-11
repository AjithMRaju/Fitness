"use client";
import { useState, useEffect, useRef } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [animStep, setAnimStep] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setAnimStep(0);
    setTimeout(() => setAnimStep(1), 80);
    setTimeout(() => setAnimStep(2), 580);
    setTimeout(() => setAnimStep(3), 1080);
    setTimeout(() => setAnimStep(4), 1580);
    setTimeout(() => {
      setSubmitted(false);
      setAnimStep(0);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 5200);
  };

  const fields = [
    { name: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "john@example.com",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "+91 12345678",
    },
  ];

  const contacts = [
    { label: "Phone", val: <a href="tel:+917025033044">+91 70250 33044</a> },
    {
      label: "Email",
      val: <a href="mailto:example@gmail.com">unit45fitness@gmail.com</a>,
    },
    {
      label: "Address",
      val: (
        <span>
          your brand
          <br />
          2nd Floor, Puthuran Plaza
          <br />
          Cochin, Kerala — 682011
        </span>
      ),
    },
    {
      label: "Hours",
      val: (
        <span>
          Mon–Sat: 5:00 AM – 10:00 PM
          <br />
          Sunday: 6:00 AM – 8:00 PM
        </span>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --dark:       #0a0a0a;
          --dark-surf:  #111111;
          --white:      #ffffff;
          --white-off:  #f5f5f4;
          --b-dark:     rgba(255,255,255,0.07);
          --b-light:    rgba(0,0,0,0.09);
          --accent:     #c8f135;
          --accent-dk:  #a8cc18;
          --tod:        #f0f0f0;
          --tod-m:      rgba(240,240,240,0.38);
          --tod-s:      rgba(240,240,240,0.18);
          --tol:        #0a0a0a;
          --tol-m:      rgba(10,10,10,0.45);
          --tol-s:      rgba(10,10,10,0.22);
        }

        .cr {
          font-family: 'DM Sans', sans-serif;
          background: var(--dark);
          min-height: 100vh;
          color: var(--tod);
          overflow-x: hidden;
          position: relative;
        }

        /* grain overlay */
        .cr::after {
          content:''; position:fixed; inset:0; pointer-events:none; z-index:0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
          opacity: 0.45;
        }

        /* cursor glow */
        .cg {
          position:fixed; width:460px; height:460px; border-radius:50%; pointer-events:none;
          z-index:0; transform:translate(-50%,-50%);
          background:radial-gradient(circle,rgba(200,241,53,0.05) 0%,transparent 68%);
          transition: left 0.1s ease, top 0.1s ease;
        }

        /* ─ NAV ─ */
        .nav {
          position:fixed; top:0; left:0; right:0; z-index:100;
          display:flex; align-items:center; justify-content:space-between;
          padding:20px 48px;
          background:linear-gradient(to bottom,rgba(10,10,10,0.97),transparent);
          backdrop-filter:blur(1px);
        }
        .nav-logo {
          font-family:'DM Sans',sans-serif; font-size:1rem; font-weight:600;
          letter-spacing:0.22em; color:var(--tod); text-transform:uppercase;
        }
        .nav-logo em { color:var(--accent); font-style:normal; }
        .nav-pill {
          font-family:'DM Mono',monospace; font-size:0.57rem; letter-spacing:0.2em;
          text-transform:uppercase; color:var(--dark); background:var(--accent);
          padding:5px 14px; display:flex; align-items:center; gap:7px;
        }
        .nav-pill::before {
          content:''; width:5px; height:5px; border-radius:50%;
          background:var(--dark); animation:blink 1.8s infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }

        /* ─ HERO ─ dark zone, Renoric/Impact headline preserved ─ */
        .hero {
          position:relative; z-index:1; background:var(--dark);
          padding:150px 48px 72px;
          display:grid; grid-template-columns:1fr auto; align-items:end; gap:24px;
          border-bottom:1px solid var(--b-dark);
        }
        .hero-eyebrow {
          font-family:'DM Mono',monospace; font-size:0.62rem; letter-spacing:0.32em;
          color:var(--accent); text-transform:uppercase; margin-bottom:18px;
          display:flex; align-items:center; gap:10px;
        }
        .hero-eyebrow::before { content:''; width:20px; height:1px; background:var(--accent); }

        /* ── HEADLINE: font-Renoric preserved, size unchanged ── */
        .hero-title {
          font-family:'Renoric','Impact','Arial Black',sans-serif;
          font-size:clamp(4rem,12vw,11rem);
          font-weight:500;
          line-height:0.9;
          letter-spacing:-0.01em;
          color:var(--tod);
        }
        .hero-title .hl-outline {
          -webkit-text-stroke:1.5px var(--white);
          color:transparent;
        }
        .hero-right {
          display:flex; flex-direction:column; align-items:flex-end; gap:6px; padding-bottom:10px;
        }
        .hr-label { font-family:'DM Mono',monospace; font-size:0.57rem; letter-spacing:0.2em; color:var(--tod-s); text-transform:uppercase; }
        .hr-val { font-size:0.8rem; font-weight:300; color:var(--tod-m); }

        /* ─ SPLIT GRID ─ */
        .split { position:relative; z-index:1; display:grid; grid-template-columns:1fr 1fr; min-height:72vh; }

        /* ─ INFO PANEL — WHITE ─ */
        .info {
          background:var(--white); color:var(--tol);
          padding:60px 48px; display:flex; flex-direction:column;
          border-right:1px solid var(--b-light);
        }
        .info-intro {
          font-size:clamp(0.92rem,1.5vw,1.1rem); font-weight:300; line-height:1.68;
          color:var(--tol-m); margin-bottom:48px; max-width:300px;
        }
        .ci {
          padding:22px 0; border-bottom:1px solid var(--b-light);
          display:grid; grid-template-columns:70px 1fr; gap:14px; align-items:start;
          transition:all 0.25s ease; cursor:default;
        }
        .ci:first-of-type { border-top:1px solid var(--b-light); }
        .ci:hover { background:var(--white-off); margin:0 -16px; padding:22px 16px; }
        .ci-lbl {
          font-family:'DM Mono',monospace; font-size:0.55rem; letter-spacing:0.22em;
          color:var(--tol-s); text-transform:uppercase; padding-top:2px;
        }
        .ci-val { font-size:0.87rem; font-weight:400; color:var(--tol); line-height:1.65; }
        .ci-val a { color:inherit; text-decoration:none; transition:color 0.2s; }
        .ci-val a:hover { color:var(--accent-dk); }

        .soc-row { display:flex; gap:0; margin-top:42px; }
        .soc {
          width:48px; height:48px; border:1px solid var(--b-light); background:none;
          color:var(--tol-m); cursor:pointer; display:flex; align-items:center;
          justify-content:center; transition:all 0.25s; margin-right:-1px;
        }
        .soc:hover { background:var(--dark); color:var(--accent); border-color:var(--dark); z-index:1; }
        .soc svg { width:17px; height:17px; }

        /* ─ FORM PANEL — DARK ─ */
        .fp {
          background:var(--dark-surf); color:var(--tod);
          padding:60px 48px; display:flex; flex-direction:column; position:relative;
          overflow:hidden;
        }
        .fp-hdr {
          font-family:'DM Mono',monospace; font-size:0.59rem; letter-spacing:0.26em;
          color:var(--tod-s); text-transform:uppercase; margin-bottom:34px;
          display:flex; align-items:center; gap:12px;
        }
        .fp-hdr::after { content:''; flex:1; height:1px; background:var(--b-dark); }

        .fw { position:relative; border-bottom:1px solid var(--b-dark); transition:border-color 0.3s; }
        .fw.on { border-color:var(--accent); }
        .fl {
          font-family:'DM Mono',monospace; font-size:0.55rem; letter-spacing:0.2em;
          color:var(--tod-s); text-transform:uppercase; display:block; padding:17px 0 0;
          transition:color 0.3s;
        }
        .fw.on .fl { color:var(--accent); }
        .fi {
          width:100%; background:none; border:none; outline:none;
          font-family:'DM Sans',sans-serif; font-size:0.93rem; font-weight:300;
          color:var(--tod); padding:8px 0 13px; caret-color:var(--accent);
        }
        .fi::placeholder { color:var(--tod-s); }
        .fta { resize:none; min-height:108px; }
        .abar {
          position:absolute; bottom:-1px; left:0; height:1px;
          background:var(--accent); width:0; transition:width 0.4s ease;
          box-shadow:0 0 6px rgba(200,241,53,0.28);
        }
        .fw.on .abar { width:100%; }

        .sub-row { margin-top:34px; display:flex; align-items:center; justify-content:space-between; }
        .sub-note { font-family:'DM Mono',monospace; font-size:0.55rem; letter-spacing:0.14em; color:var(--tod-s); }
        .sub-btn {
          display:flex; align-items:center; gap:14px; background:none;
          border:1px solid rgba(255,255,255,0.11); color:var(--tod);
          font-family:'DM Sans',sans-serif; font-size:0.82rem; font-weight:500;
          letter-spacing:0.06em; padding:13px 28px; cursor:pointer;
          position:relative; overflow:hidden; transition:color 0.3s,border-color 0.3s;
        }
        .sub-btn::before {
          content:''; position:absolute; inset:0; background:var(--accent);
          transform:scaleX(0); transform-origin:left;
          transition:transform 0.38s cubic-bezier(0.77,0,0.18,1);
        }
        .sub-btn:hover::before { transform:scaleX(1); }
        .sub-btn:hover { color:var(--dark); border-color:var(--accent); }
        .sub-btn span, .sub-btn svg { position:relative; z-index:1; }
        .sub-btn svg { width:15px; height:15px; transition:transform 0.3s; }
        .sub-btn:hover svg { transform:translateX(4px); }

        /* ═══ UNIQUE SUCCESS STATE ═══ */
        .succ {
          position:absolute; inset:0; overflow:hidden;
          background:var(--dark-surf);
          display:flex; flex-direction:column; align-items:center; justify-content:center;
        }

        /* Step 1: accent stripe flashes across the panel */
        .ss-stripe {
          position:absolute; inset:0;
          background:var(--accent);
          clip-path: inset(0 100% 0 0);
          transition: clip-path 0.5s cubic-bezier(0.77,0,0.18,1);
        }
        .ss-stripe.s1 { clip-path:inset(0 0% 0 0); }
        .ss-stripe.s2 { clip-path:inset(0 0% 0 100%); transition-delay:0.05s; }

        /* Step 2+: content staggered in */
        .ss-body {
          position:relative; z-index:2;
          display:flex; flex-direction:column; align-items:center;
          gap:16px; text-align:center; padding:40px;
        }

        /* big hollow countdown label */
        .ss-num {
          font-family:'Renoric','Impact','Arial Black',sans-serif;
          font-size:clamp(5rem,11vw,8.5rem);
          font-weight:500; line-height:1;
          -webkit-text-stroke:1.5px var(--accent);
          color:transparent;
          opacity:0; transform:translateY(28px);
          transition:opacity 0.5s ease, transform 0.5s ease;
        }
        .ss-num.go { opacity:1; transform:translateY(0); }

        .ss-line {
          width:0; height:1px; background:var(--b-dark);
          transition:width 0.55s ease;
        }
        .ss-line.go { width:160px; }

        .ss-tag {
          font-family:'DM Mono',monospace; font-size:0.58rem; letter-spacing:0.3em;
          text-transform:uppercase; color:var(--tod-s);
          opacity:0; transition:opacity 0.45s ease 0.1s;
        }
        .ss-tag.go { opacity:1; }

        .ss-title {
          font-family:'Renoric','Impact','Arial Black',sans-serif;
          font-size:clamp(1.5rem,3.5vw,2.4rem);
          font-weight:500; letter-spacing:0.06em; color:var(--tod);
          opacity:0; transform:translateY(10px);
          transition:opacity 0.5s ease, transform 0.5s ease;
        }
        .ss-title.go { opacity:1; transform:translateY(0); }

        .ss-sub {
          font-size:0.81rem; font-weight:300; color:var(--tod-m); line-height:1.7;
          opacity:0; transition:opacity 0.45s ease 0.15s;
        }
        .ss-sub.go { opacity:1; }

        /* bottom progress bar counts down */
        .ss-prog {
          position:absolute; bottom:0; left:0; height:2px;
          background:var(--accent); width:0;
          transition:width 4.5s linear;
          box-shadow:0 0 8px rgba(200,241,53,0.4);
        }
        .ss-prog.go { width:100%; }

        /* ─ BOTTOM BAR ─ */
        .bot {
          position:relative; z-index:1; background:var(--dark);
          border-top:1px solid var(--b-dark);
          padding:18px 48px; display:flex; align-items:center; justify-content:space-between;
        }
        .bot-copy { font-family:'DM Mono',monospace; font-size:0.56rem; letter-spacing:0.14em; color:var(--tod-s); }
        .bot-tag {
          font-family:'DM Mono',monospace; font-size:0.56rem; letter-spacing:0.2em;
          color:var(--tod-s); display:flex; align-items:center; gap:8px;
        }
        .bot-tag::before { content:''; width:5px; height:5px; border-radius:50%; background:var(--accent); animation:blink 2s infinite; }

        /* ─ RESPONSIVE ─ */
        @media(max-width:900px){
          .nav { padding:16px 24px; }
          .hero { padding:112px 24px 56px; grid-template-columns:1fr; }
          .hero-right { display:none; }
          .split { grid-template-columns:1fr; }
          .info { border-right:none; border-bottom:1px solid var(--b-light); padding:48px 24px; }
          .fp { padding:48px 24px; }
          .bot { padding:16px 24px; flex-direction:column; gap:8px; text-align:center; }
        }
        @media(max-width:480px){
          .sub-row { flex-direction:column; align-items:flex-start; gap:18px; }
          .sub-btn { width:100%; justify-content:space-between; }
          .ci { grid-template-columns:56px 1fr; gap:10px; }
          .hero-title { font-size:3.5rem; }
        }
      `}</style>

      <div className="cr" id="contact">
        <div className="cg" style={{ left: mousePos.x, top: mousePos.y }} />

        {/* NAV */}
        <nav className="nav">
          <div className="nav-logo">
            Your<em>Gym</em> Brand
          </div>
          <div className="nav-pill">Now Open</div>
        </nav>

        {/* HERO — dark, headline font preserved */}
        <section className="hero" ref={heroRef}>
          <div>
            <div className="hero-eyebrow">Contact Us</div>
            <h1 className="hero-title">
              GET IN
              <br />
              <span className="hl-outline">TOUCH</span>
            </h1>
          </div>
          <div className="hero-right">
            <span className="hr-label">Response Time</span>
            <span className="hr-val">Within 24hrs</span>
            <span className="hr-label" style={{ marginTop: 12 }}>
              Location
            </span>
            <span className="hr-val">Cochin, Kerala</span>
          </div>
        </section>

        {/* SPLIT */}
        <div className="split">
          {/* WHITE INFO PANEL */}
          <div className="info">
            <p className="info-intro">
              Need fitness advice or want to book a session? We&#39;re here —
              reach out through any channel below.
            </p>
            {contacts.map(({ label, val }) => (
              <div className="ci" key={label}>
                <span className="ci-lbl">{label}</span>
                <span className="ci-val">{val}</span>
              </div>
            ))}
            <div className="soc-row">
              {/* Instagram */}
              <button className="soc" title="Instagram">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    fillRule="evenodd"
                    fill="currentColor"
                  />
                </svg>
              </button>
              {/* WhatsApp */}
              <button className="soc" title="WhatsApp">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                    fillRule="evenodd"
                    fill="currentColor"
                  />
                  <path
                    d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              {/* YouTube */}
              <button className="soc" title="YouTube">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* DARK FORM PANEL */}
          <div className="fp">
            {submitted ? (
              /* ══ UNIQUE SUCCESS SEQUENCE ══ */
              <div className="succ">
                {/* accent flash stripe */}
                <div
                  className={`ss-stripe${animStep >= 1 ? " s1" : ""}${animStep >= 2 ? " s2" : ""}`}
                />

                <div className="ss-body">
                  {/* large hollow "24H" reveal */}
                  <div className={`ss-num${animStep >= 2 ? " go" : ""}`}>
                    24H
                  </div>

                  <div className={`ss-line${animStep >= 3 ? " go" : ""}`} />
                  <div className={`ss-tag${animStep >= 3 ? " go" : ""}`}>
                    Message Received
                  </div>

                  <div className={`ss-title${animStep >= 3 ? " go" : ""}`}>
                    WE&apos;LL HIT
                    <br />
                    YOU BACK
                  </div>

                  <div className={`ss-sub${animStep >= 4 ? " go" : ""}`}>
                    Your message landed safely.
                    <br />
                    Expect a reply within 24 hours.
                  </div>
                </div>

                {/* glowing progress bar drains away */}
                <div className={`ss-prog${animStep >= 2 ? " go" : ""}`} />
              </div>
            ) : (
              <>
                <div className="fp-hdr">Send a Message</div>
                <form onSubmit={handleSubmit}>
                  {fields.map(({ name, label, type, placeholder }) => (
                    <div
                      key={name}
                      className={`fw${focused === name ? " on" : ""}`}
                    >
                      <label className="fl">{label}</label>
                      <input
                        className="fi"
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        value={formData[name]}
                        onChange={handleChange}
                        onFocus={() => setFocused(name)}
                        onBlur={() => setFocused(null)}
                        required
                      />
                      <div className="abar" />
                    </div>
                  ))}
                  <div className={`fw${focused === "message" ? " on" : ""}`}>
                    <label className="fl">Message</label>
                    <textarea
                      className="fi fta"
                      name="message"
                      placeholder="Tell us about your fitness goals..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      required
                    />
                    <div className="abar" />
                  </div>
                  <div className="sub-row">
                    <span className="sub-note">We respect your privacy.</span>
                    <button type="submit" className="sub-btn">
                      <span>Send Message</span>
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M2 8h12M9 3l5 5-5 5" />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="bot">
          <span className="bot-copy">
            © 2026 UNIT45 FITNESS. ALL RIGHTS RESERVED.
          </span>
          <span className="bot-tag">NOW ACCEPTING NEW MEMBERS</span>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
