// ============================================================
// components/Navbar.jsx — AI Media Website
// ─────────────────────────────────────────────────────────────
// HOW TO EDIT:
// - To change nav links: edit the LINKS array below
// - To change logo text: find "AI Media" and change it
// - To change button text: find "Get Started" and change it
// - To change button link: change href="#contact"
// ============================================================

'use client';

// ── Nav link labels — EDIT THESE to change menu items ────────
const LINKS = ['Home', 'Services', 'About us', 'Works', 'Blogs'];

export default function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '74px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        /* Frosted glass effect */
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        backgroundColor: 'rgba(245,245,245,0.18)',
        borderBottom: '1px solid #e3e3e3',
        /* Slide down animation on page load */
        animation: 'navDown 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both',
      }}
    >
      {/* ── Logo / Brand Name ────────────────────────────────
          EDIT: Change "AI Media" to your brand name         */}
      <span
        style={{
          fontFamily: 'var(--font-main)',
          fontWeight: 700,
          fontSize: '22px',
          color: '#030303',
          letterSpacing: 0,
          userSelect: 'none',
        }}
      >
        AI Media
      </span>

      {/* ── Nav Links ────────────────────────────────────────
          Each link drops in one-by-one with staggered delay  */}
      <div className="nav-links" style={{ display: 'flex', gap: '2px' }}>
        {LINKS.map((link, i) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(' ', '')}`}
            className="nav-link"
            style={{
              padding: '8px 16px',
              fontFamily: 'var(--font-main)',
              fontWeight: i === 0 ? 600 : 400,
              fontSize: '15px',
              color: i === 0 ? '#000' : '#3d3d3d',
              textDecoration: 'none',
              borderRadius: '6px',
              transition: 'background 0.2s',
              /* Staggered drop-in: each link 0.1s later than prev */
              opacity: 0,
              animation: `linkDrop 0.4s ease ${0.4 + i * 0.1}s forwards`,
            }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* ── Get Started Button ───────────────────────────────
          EDIT: Change text or href below                     */}
      <a
        href="#contact"
        className="nav-cta"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#000',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '10px',
          padding: '0 20px',
          height: '46px',
          fontFamily: 'var(--font-main)',
          fontWeight: 700,
          fontSize: '14px',
          cursor: 'pointer',
          transition: 'opacity 0.2s, transform 0.2s',
          boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
          /* Pops in last, after all links */
          opacity: 0,
          animation: 'btnPop 0.5s cubic-bezier(0.34,1.56,0.64,1) 1s forwards',
        }}
      >
        ✦ Get Started
      </a>
    </nav>
  );
}
