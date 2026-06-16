export async function getServerSideProps({ res }) {
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  return { props: {} };
}

export default function About() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>About</h1>
      <p>This is /about — primed for domain2.</p>
    </main>
  );
}
