import { useEffect, useState } from "react";

const FetchWithReTry = () => {
    const [data, setData] = useState([])
    // Retry API Request on Failure

    const retryFetch = async (url, attempts = 3) => {
        for (let i = 0; i < attempts; i++) {
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error('Failed to Fetch');
                return await res.json(); // this break the loop when we succeed to get the data

            } catch (error) {
                if (i === attempts - 1) throw error;
                await new Promise(res => setTimeout(res, 1000))
            }
        }
    }

    useEffect(() => {
        retryFetch('https://fakestoreapi.com/products')
            .then((res) => setData(res))
            .catch((error) => {
                console.log(error.message);
            })
    }, [])
    console.log(data);

    return (
        <div>FetchWithReTry</div>
    )
}

export default FetchWithReTry