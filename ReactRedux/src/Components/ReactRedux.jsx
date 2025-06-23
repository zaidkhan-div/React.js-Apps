import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, updateValue, resetValue, updateName } from '../Features/Counter/CounterSlice.js'

const ReactRedux = () => {

    // const value = useSelector((state) => state.counter.value)
    const dispatch = useDispatch(); // Send Action to Update State

    //  const value  = useSelector((state) => state.counter.value)
    const { value, name } = useSelector((state) => state.counter)
    dispatch(updateName('CounterName'))
    console.log(value, name);


    useEffect(() => {
        dispatch(updateValue(2))
    }, [dispatch])

    const handleClick = () => {
        dispatch(resetValue());
        // alert(value)
    }
    console.log(value);

    return (
        <React.Fragment>
            <p>{value}</p>
            <button onClick={handleClick}>ResetValue</button>
        </React.Fragment>
    )
}

export default ReactRedux