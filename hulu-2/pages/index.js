import Head from 'next/head'
import Image from 'next/image'
import Header from './Header'
import Nav from './Nav'
import Results from './Results'
import Requests from '../utils/Requests'

export default function Home(props) {

  console.log(props);

  return (
    <div >
      <Head>
        <title>Hulu 2.0</title>
      </Head>
    <Header/>

    <Nav/>

    <Results/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      Requests[genre]?.url || Requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.Results,
    },
  };
}
