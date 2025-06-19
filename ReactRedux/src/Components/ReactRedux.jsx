import React from 'react'
import { useSelector } from 'react-redux'

const ReactRedux = () => {
    const countValue = useSelector((state) => state.counter.value)
    console.log(countValue);

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default ReactRedux