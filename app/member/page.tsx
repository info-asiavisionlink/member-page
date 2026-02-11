"use client";

import Link from "next/link";

type Card = {
  title: string;
  desc: string;
  href: string;
};

const cards: Card[] = [
  { title: "社内相談士AI", desc: "社内の相談・ナレッジ検索・FAQ", href: "/member/naiso" },
  { title: "助成金AI", desc: "診断・必要書類・申請サポート", href: "/member/subsidy" },
  { title: "URL学習", desc: "あなたのサイトを登録してAI精度UP", href: "/member/url" },
  { title: "請求・プラン", desc: "プラン変更・支払い状況の確認", href: "/member/billing" },
];

export default function MemberPage() {
  // 将来ここで「tokenチェック → 無ければ/loginへ」みたいにする
  // const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return (
    <main className="container">
      <section className="panel">
        <div style={{ display: "flex", gap: 12, justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div>
            <div className="brand">NEXT ASIA LINK</div>
            <h1 className="h1" style={{ marginBottom: 6 }}>会員ページ（ダッシュボード）</h1>
            <p className="sub">ここから各AIサービスの利用・設定・請求情報の確認ができます。</p>
          </div>

          <div className="row" style={{ justifyContent: "flex-end" }}>
            <button className="btn" onClick={() => alert("設定（後で実装）")}>設定</button>
            <button
              className="btn btnDanger"
              onClick={() => {
                // 将来 token を消してログアウト
                // localStorage.removeItem("token");
                window.location.href = "/login";
              }}
            >
              ログアウト
            </button>
          </div>
        </div>

        <div className="grid">
          {cards.map((c) => (
            <div key={c.href} className="card">
              <h3 className="cardTitle">{c.title}</h3>
              <p className="cardSub">{c.desc}</p>
              <Link className="cardLink" href={c.href}>
                開く →
              </Link>
            </div>
          ))}
          <div className="card" style={{ gridColumn: "span 8" }}>
            <h3 className="cardTitle">お知らせ</h3>
            <p className="cardSub">
              ここに運営からのお知らせ、障害情報、アップデート情報などを出します（後でn8nから取得も可能）。
            </p>
            <span className="cardLink" style={{ cursor: "default" }}>準備中</span>
          </div>
        </div>
      </section>
    </main>
  );
}
