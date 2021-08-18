import Pagination from './Pagination';

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 ">
      <p className="text-gray-600 text-md mb-5 mt-3 ">
        About {results.searchInformation?.formattedTotalResults} results ({' '}
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8 cursor-pointer">
          <div className="group">
            <a href={results.link} className="text-sm">
              {result.formattedUrl}
            </a>
            <a href={results.link}>
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline ">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}

      <Pagination />
    </div>
  );
}

SearchResults.getInitialProps = ({ res, err }) => {
  const results = res ? res.results : err ? err.results : 404;

  return { results };
};

export default SearchResults;
