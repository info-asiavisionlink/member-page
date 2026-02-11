"use client";

export default function LoginPage() {
  return (
    <main className="container">
      <section className="panel">
        <div className="brand">NEXT ASIA LINK</div>
        <h1 className="h1">ログイン（仮）</h1>
        <p className="sub">
          ここは仮ログイン画面。後でn8n/APIに繋いで認証します。
        </p>

        <div style={{ display: "grid", gap: 12, maxWidth: 520 }}>
          <input
            placeholder="ログインID"
            style={inputStyle}
          />
          <input
            placeholder="パスワード"
            type="password"
            style={inputStyle}
          />
          <button
            className="btn btnPrimary"
            onClick={() => {
              // 将来：ここでn8nに投げてtoken受け取る
              // localStorage.setItem("token", "dummy");
              window.location.href = "/member";
            }}
          >
            ログイン →
          </button>
        </div>
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(54,227,255,.20)",
  background: "rgba(0,0,0,.35)",
  color: "rgba(255,255,255,.92)",
  outline: "none",
};
