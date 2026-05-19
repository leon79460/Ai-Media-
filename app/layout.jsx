import "./globals.css";
import ScrollEffects from "./components/ScrollEffects";

export const metadata = {
  title: "AI Media - AI Powered Creative Agency",
  description:
    "AI Media rebuilds the online presence of AV and smart home integrators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 bg-[#f5f5f5] p-0 antialiased">
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}
