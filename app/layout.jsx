// ============================================================
// app/layout.jsx — AI Media Website
// ─────────────────────────────────────────────────────────────
// HOW TO EDIT:
// - title    → changes the browser tab text
// - description → changes SEO meta description
// ============================================================

import './globals.css'; // ← loads your global styles

export const metadata = {
  title: 'AI Media — AI Powered Creative Agency',
  description:
    'AI Media rebuilds the online presence of AV and smart home integrators.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#f5f5f5' }}>
        {children}
      </body>
    </html>
  );
}
