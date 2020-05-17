import Head from "next/head";

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {JSON.stringify(props)}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get external data from the file system, API, DB, etc.
  const res  = await fetch("http://venus.health/api/blog?page=1&perPage=10");
  const data = await res.json();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {...data}
  }
}