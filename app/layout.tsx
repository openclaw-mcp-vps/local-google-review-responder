import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewReply AI — Respond to Google Reviews Professionally",
  description: "AI-powered Google review responses for local businesses. Generate brand-appropriate replies in seconds, handle positive and negative feedback with ease."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="53ede053-78c3-42bf-862e-53d7cd02ae01"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
