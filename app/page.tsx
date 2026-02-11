import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>member-page</h1>
      <p>
        <Link href="/member">/member へ移動</Link>
      </p>
    </main>
  );
}
