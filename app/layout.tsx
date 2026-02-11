import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEXT ASIA LINK | Member",
  description: "Member dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="nal-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
