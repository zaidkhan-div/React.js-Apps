import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, updateValue, resetValue, updateName } from '../Features/CounterSlice.js'

const ReactRedux = () => {

    // const value = useSelector((state) => state.counter.value)
    const { value, name } = useSelector((state) => state.counter);
    const dispatch = useDispatch(); // Send Action to Update State

    //  const value  = useSelector((state) => state.counter.value)

    dispatch(updateName('CounterName'))


    useEffect(() => {
        dispatch(updateValue(2))
    }, [dispatch])

    const handleClick = () => {
        dispatch(resetValue());
        // alert(value)
    }
    const increaseValue = () => {
        dispatch(increment())
    }
    console.log(value);

    return (
        <React.Fragment>
            <p>{value}</p>
            <button onClick={handleClick}>ResetValue</button>
            <button onClick={increaseValue}>InceaseValue</button>
        </React.Fragment>
    )
}

export default ReactRedux