import Link from "next/link";

export default function Home() {
  return (
    <main className="nal-wrap">
      <div className="nal-shell" style={{ padding: 22 }}>
        <div className="nal-scan" aria-hidden="true" />
        <div style={{ padding: 22 }}>
          <div className="nal-brand">NEXT ASIA LINK</div>
          <h1 className="nal-title" style={{ marginTop: 10 }}>member-page</h1>
          <p className="nal-sub">会員ページへ移動します。</p>
          <div style={{ marginTop: 16 }}>
            <Link className="nal-link" href="/member">/member へ移動 →</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
