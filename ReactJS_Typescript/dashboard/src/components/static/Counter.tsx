import React, { useContext } from 'react'
import { useCounter } from '../../hooks/useCounter';

export const Counter = () => {

  const defaultValueCounter = 10;

  const [counter, increment, decrement] = useCounter(defaultValueCounter);

  return (
    <div>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button className='counterButton' onClick={increment}>+</button>
      <button className='counterButton' onClick={decrement}>-</button>
    </div>
    
  )
}
