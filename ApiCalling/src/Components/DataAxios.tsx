import axios from 'axios'
import { useEffect, useState } from 'react'

const DataAxios = () => {
  const [data, setData] = useState([]);

  const url: string = 'https://fakestoreapi.com/products';
  useEffect(() => { // React expects useEffect to return either nothing or a cleanup function, not a Promise.
    const controller = new AbortController();
    const signal = controller.signal;

    axios.get(url, { signal })
      .then((response) => {
        setData(response.data)
      }).catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request Canceled");
        }
        else {
          console.log(err);
        }
      })

    return () => {
      controller.abort() // Cancel when unmounting
    }
  }, [])

  console.log(data);


  return (
    <div className='flex flex-wrap justify-between items-center'>  {/* Parent Div */}
      {
        data.map((items, index) => (
          <div key={items.id} className='w-[300px] h-[500px] my-5 overflow-hidden flex flex-col gap-5 rounded-2xl border-2 shadow-orange-950 '>
            <div className="h-[250px] rounded-2xl ">
              <img src={items.image} className='w-full h-full' alt="" />
            </div>
            <div className="flex flex-col text-center gap-5">
              <h3 className='text-2xl font-bold'>{items.title}</h3>
              <p>{items.description}</p>
              <div className='flex items-center justify-around'>
                <p>{items?.rating?.rate}</p>
                <p>{items.price}</p>
              </div>
            </div>
          </div>
        ))
      }
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
    </div>
  )
}

export default DataAxios