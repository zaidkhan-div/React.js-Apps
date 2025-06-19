import { useEffect, useState } from "react";

const Debouncing = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // useEffect(() => {
  //   const delayDebounce = setTimeout(() => {
  //     if (query) {
  //       fetch(`https://dummyjson.com/products/search?q=${query}`)
  //         .then(res => res.json())
  //         .then(data => setResults(data.products));
  //     }
  //   }, 500); // Wait 500ms after user stops typing

  //   return () => clearTimeout(delayDebounce); // Clean up
  // }, [query]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query) {
        fetch(`https://dummyjson.com/products/search?q=${query}`)
          .then((res) => {
            return res.json()
          })
          .then((item) => {
            return setResults(item.products)
          })
      }
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [query])

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/products/search?q=${query}`)
  //     .then((res) => res.json())
  //     .then((data) => { setResults(data.products) })
  //     .catch(err => console.log(err))
  // }, [query])

  // this is one is without debouncing making issue calling api on every keyword 

  console.log(results);

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        onChange={(e) => setQuery(e.target.value)}
        className="border px-4 py-2"
      />

      <div className='flex flex-wrap justify-between overflow-hidden items-center'>  {/* Parent Div */}
        {
          results.map((items, index) => (
            <div key={items.id} className='w-[300px] h-[500px] flex flex-col gap-5 rounded-2xl border-2 shadow-orange-950 '>
              <div className="h-[280px] rounded-2xl ">
                <img src={items.images} className='w-full h-full rounded-2xl' alt="" />
              </div>
              <div className="flex flex-col text-center gap-5">
                <h3 className='text-2xl font-bold'>{items.title}</h3>
                <p>{items.description}</p>
                <div className='flex items-center justify-around'>
                  <p>{items.rating}</p>
                  <p>{items.price}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Debouncing;
