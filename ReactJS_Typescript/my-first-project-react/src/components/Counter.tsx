import React, {useState} from 'react'

export const Counter = () => {

   const names: string[] = ["name1", "name2", "name3"];

   const [counter, setCounter] = useState<number>(0);

   const [name, setName] = useState<string>("name's output field");

   const onIncrement = () => {
      setCounter(counter + 1);
   }
   const onDecrement = () => {
      setCounter(counter - 1);
   }
   const changeName = (newName: string) => {
      setName(newName);
   }
   
  return (
    <div className='counter'>
      <h1>Counter: {counter}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <h3>{name}</h3>
      {names.map((name, i) => <div key={`${name}-${i}`}>
          <h3 onClick={() => changeName(name)}>{name}</h3>
        </div>)}
    </div>
  )
}
