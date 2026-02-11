"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <section className="panel">
        <div className="brand">NEXT ASIA LINK</div>
        <h1 className="h1">member-page</h1>
        <p className="sub">
          ログイン後は会員ページ（ダッシュボード）へ移動します。
        </p>

        <div className="row">
          <Link className="btn btnPrimary" href="/member">
            /member へ移動 →
          </Link>
          <Link className="btn" href="/login">
            /login（仮） →
          </Link>
        </div>
      </section>
    </main>
  );
}
