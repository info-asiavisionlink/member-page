export default function MemberHome() {
  return (
    <main style={{ padding: 24, maxWidth: 1080, margin: "0 auto" }}>
      <div style={{
        border: "1px solid rgba(54,227,255,.25)",
        background: "rgba(8,12,22,.72)",
        borderRadius: 18,
        padding: 22,
        boxShadow: "0 0 0 1px rgba(184,75,255,.08), 0 20px 70px rgba(0,0,0,.55)",
        backdropFilter: "blur(10px)"
      }}>
        <div style={{ display:"flex", justifyContent:"space-between", gap:16, flexWrap:"wrap" }}>
          <div>
            <div style={{ fontSize: 12, color:"rgba(255,255,255,.65)" }}>NEXT ASIA LINK</div>
            <h1 style={{ margin:"6px 0 0", fontSize: 28 }}>会員ページ（ダッシュボード）</h1>
            <p style={{ margin:"10px 0 0", color:"rgba(255,255,255,.72)" }}>
              ここから各AIサービスの利用・設定・請求情報の確認ができます。
            </p>
          </div>

          <div style={{ display:"flex", gap:10, alignItems:"center" }}>
            <a href="/member/settings" style={{
              display:"inline-flex",
              padding:"10px 14px",
              borderRadius: 12,
              border:"1px solid rgba(54,227,255,.25)",
              background:"rgba(0,0,0,.25)",
              color:"rgba(255,255,255,.88)",
              textDecoration:"none"
            }}>
              設定
            </a>
            <a href="/logout" style={{
              display:"inline-flex",
              padding:"10px 14px",
              borderRadius: 12,
              border:"1px solid rgba(255,46,255,.25)",
              background:"rgba(0,0,0,.25)",
              color:"rgba(255,255,255,.88)",
              textDecoration:"none"
            }}>
              ログアウト
            </a>
          </div>
        </div>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",
          gap:14,
          marginTop:18
        }}>
          {[
            {title:"社内相談士AI", desc:"社内の相談・ナレッジ検索・FAQ", href:"#"},
            {title:"助成金AI", desc:"診断・必要書類・申請サポート", href:"#"},
            {title:"URL学習", desc:"あなたのサイトを登録してAI精度UP", href:"#"},
            {title:"請求・プラン", desc:"プラン変更・支払い状況の確認", href:"#"},
          ].map((c) => (
            <a key={c.title} href={c.href} style={{
              textDecoration:"none",
              color:"inherit",
              border:"1px solid rgba(54,227,255,.18)",
              background:"rgba(0,0,0,.22)",
              borderRadius: 16,
              padding: 16,
              minHeight: 120
            }}>
              <div style={{ fontSize: 16, fontWeight: 700 }}>{c.title}</div>
              <div style={{ marginTop: 8, color:"rgba(255,255,255,.70)", fontSize: 13, lineHeight: 1.5 }}>
                {c.desc}
              </div>
              <div style={{ marginTop: 12, fontSize: 12, color:"rgba(54,227,255,.90)" }}>
                開く →
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
