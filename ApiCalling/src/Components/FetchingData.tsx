import { useState, useEffect } from 'react';

const FetchingData = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const controller = new AbortController();

    useEffect(() => {
        fetch('https://dummyjson.com/products', { signal: controller.signal }) // Replace with your API endpoint
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data.products);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
        return()=>{
            controller.abort() //  cancel the request on unmounting 
        }
    }, []); 



    if (loading) return <div className='text-red-500'>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='flex flex-wrap justify-between items-center'>  {/* Parent Div */}
            {
                data.map((items, index) => (
                    <div key={items.id} className='w-[300px] h-[500px] flex flex-col gap-5 rounded-2xl border-2 shadow-orange-950 '>
                        <div className="h-[280px] rounded-2xl ">
                            <img src={items.images} className='w-full h-full' alt="" />
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
            {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
        </div>
    );
}
export default FetchingData