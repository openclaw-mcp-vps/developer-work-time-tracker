import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevTime — Anonymous Developer Productivity Reality Check",
  description: "Private time tracking that shows your actual coding vs meeting time with anonymous industry benchmarks. Know where your hours really go."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d43ff153-826b-44cd-8686-d62a69e3cb7d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
