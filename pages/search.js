import Head from 'next/head';
import Header from './components/Header';
import { response } from '../Response';
import { useRouter } from 'next/router';
import SearchResults from './components/SearchResults';

function search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <SearchResults results={results} />
    </div>
  );
}

export default search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || '0';

  const data = useDummyData
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`,
      ).then((response) => response.json());

  //get data to pass in as props
  return {
    props: {
      results: data,
    },
  };
}
