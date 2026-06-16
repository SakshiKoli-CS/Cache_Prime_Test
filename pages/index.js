export async function getServerSideProps({ res }) {
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  return { props: {} };
}

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Cache Prime Demo — Home (/)</h1>
      <p>This is the homepage — one of the routes being cache-primed after every deployment.</p>
      <nav style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
        <a href="/blog">Blog</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/docs">Docs</a>
      </nav>
    </main>
  );
}
