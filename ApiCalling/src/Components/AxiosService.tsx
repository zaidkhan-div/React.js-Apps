import { useState, useEffect } from "react"
import Api from "../services/api"
import axios from "axios";

const AxiosService = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Api.get('/posts')
            .then((response) => setProducts(response))
            .catch((err) => {
                console.log('Failed to fetch products', err);

            })
    }, [])

    console.log(products);


    return (
        <div>
            Axios Services Products
            <pre>{JSON.stringify(products, null, 2)}</pre>
        </div>
    )
}

export default AxiosService




