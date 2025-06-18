import Api from "../services/api"
import { useEffect, useRef, useState } from "react"

const AxiosServices1 = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        const Controller = new AbortController();
        const signal = Controller.signal;

        Api.get('/posts', { signal })
            .then((response) => setData(response?.data?.posts))
            .catch(err => console.log(err)
            )
        return () => Controller.abort()
    }, [])

    return (
        <div>
            <h1>Another Axios Service</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default AxiosServices1