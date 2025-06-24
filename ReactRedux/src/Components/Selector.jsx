import React from 'react'
import { useSelector } from 'react-redux'

const Selector = () => {

    const names = useSelector(selectName)
    const counter = useSelector(selectCounter)
    console.log(names, counter);

    return (
        <>

        </>
    )
}

export default Selector