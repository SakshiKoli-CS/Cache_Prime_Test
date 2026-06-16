export async function getServerSideProps({ res }) {
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  return { props: {} };
}

export default function Products() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Products</h1>
      <p>This is /products — primed for domain1.</p>
    </main>
  );
}
