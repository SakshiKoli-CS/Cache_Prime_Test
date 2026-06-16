export async function getServerSideProps({ res }) {
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  return { props: {} };
}

export default function Docs() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Docs</h1>
      <p>This is /docs — primed for domain3.</p>
    </main>
  );
}
