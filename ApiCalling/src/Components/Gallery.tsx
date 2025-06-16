import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Gallery = () => {
    const [data, setData] = useState(null)
    console.log(data);



    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((items) => {
                setData(items.data)
            })
            .catch((error) => {
                console.log("Failed Complete the Task", error)
            });

    }, [])


    return (
        <>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}

export default Gallery