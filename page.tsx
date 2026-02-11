import Link from "next/link";

type Card = {
  title: string;
  desc: string;
  href: string;
};

const cards: Card[] = [
  { title: "社内相談士AI", desc: "社内の相談・ナレッジ検索・FAQ", href: "#" },
  { title: "助成金AI", desc: "診断・必要書類・申請サポート", href: "#" },
  { title: "URL学習", desc: "あなたのサイトを登録してAI精度UP", href: "#" },
  { title: "請求・プラン", desc: "プラン変更・支払い状況の確認", href: "#" },
];

export default function MemberPage() {
  return (
    <main className="nal-wrap">
      <section className="nal-shell">
        <div className="nal-scan" aria-hidden="true" />

        <header className="nal-head">
          <div>
            <div className="nal-brand">NEXT ASIA LINK</div>
            <h1 className="nal-title">会員ページ（ダッシュボード）</h1>
            <p className="nal-sub">
              ここから各AIサービスの利用・設定・請求情報の確認ができます。
            </p>
          </div>

          <div className="nal-actions">
            <button className="nal-btn" type="button" onClick={() => alert("設定はこれから実装するよ")}>
              設定
            </button>
            <button className="nal-btn primary" type="button" onClick={() => alert("ログアウト処理はこれから実装するよ")}>
              ログアウト
            </button>
          </div>
        </header>

        <div className="nal-grid">
          {cards.map((c) => (
            <article className="nal-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <Link className="nal-link" href={c.href}>
                開く →
              </Link>
            </article>
          ))}

          {/* 将来の追加枠（見た目を“威厳ある余白”にする） */}
          <article className="nal-card empty" aria-hidden="true" />
          <article className="nal-card empty" aria-hidden="true" />
        </div>

        <div style={{ padding: "0 18px 22px", color: "rgba(255,255,255,.55)", fontSize: 12 }}>
          ※ ここから先は「ログイン連携」「トークン判定」「各サービスへの遷移URL」を順番に繋ぐだけ。
          <div style={{ marginTop: 6 }}>
            <Link className="nal-link" href="/">
              トップへ戻る →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
