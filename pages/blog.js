export async function getServerSideProps({ res }) {
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  return { props: {} };
}

export default function Blog() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Blog</h1>
      <p>This is /blog — primed for domain1.</p>
    </main>
  );
}
