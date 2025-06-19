import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increament, updateValue, resetValue } from '../Features/Counter/CounterSlice.js'

const ReactRedux = () => {

    // const value = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    // const checkin = dispatch(updateValue(2))
    const value = useSelector((state) => state.counter.value)
    useEffect(() => {
        dispatch(updateValue(2))
    }, [dispatch])
    
    const handleClick = () => {
        dispatch(resetValue());
        alert(value)
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