import axios from 'axios'
import { useEffect, useState } from 'react'

const DataAxios = () => {
  const [data, setData] = useState([]);

  const url: string = 'https://fakestoreapi.com/products';

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setData(response.data)
      })
  }, [])

  return (
    <div>
~
    </div>
  )
}

export default DataAxios