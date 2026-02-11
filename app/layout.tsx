import "./globals.css";

export const metadata = {
  title: "NEXT ASIA LINK | Member",
  description: "Member dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="bg">
          <div className="bgGrid" />
          <div className="bgGlow" />
          <div className="bgScan" />
        </div>
        {children}
      </body>
    </html>
  );
}
