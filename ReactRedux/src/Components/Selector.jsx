import React from 'react'
import { useSelector } from 'react-redux'
// useSelector is a React hook from react-redux used to read data from the Redux store inside your React component.
import { selectTotalTodos, selectName } from '../Features/selectors'

const Selector = () => {

    // const names = useSelector(selectName)
    // const counter = useSelector(selectCounter)
    // console.log(names, counter);

    const todosLenght = useSelector(selectTotalTodos);
    console.log(todosLenght + " CheckLenght")

    const { name, counter } = useSelector(selectName);
    console.log(name + ' useSelector');
    console.log(counter + ' useSelectorCounter');


    return (
        <>
            <p>Name from createSelector: {name}</p>
            <p>Counter From CreateSelector {counter}</p>
        </>
    )
}

export default Selector