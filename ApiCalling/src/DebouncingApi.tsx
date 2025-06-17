import { useEffect, useState } from "react";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query) {
        fetch(`https://dummyjson.com/products/search?q=${query}`)
          .then(res => res.json())
          .then(data => setResults(data.products));
      }
    }, 500); // Wait 500ms after user stops typing

    return () => clearTimeout(delayDebounce); // Clean up
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        onChange={(e) => setQuery(e.target.value)}
        className="border px-4 py-2"
      />

      <div>
        {results.map(item => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
