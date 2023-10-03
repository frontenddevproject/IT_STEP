import React from 'react';
import { ReduxStoreType } from './redux/types';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Todos } from './components/Todos';


function App() {
  const counter = useSelector((store: {counter: number}) => store.counter);
  const dispatch = useDispatch();

  const updateCounter = () => dispatch({type:"UPDATE_COUNTER", payload: 10});
  const update = (newcounter: number) => dispatch({type:"UPDATE_COUNTER", payload: newcounter});

  return (
    <div className="App">
        <h1>Value counter: {counter}</h1>
        <button onClick={() => dispatch({type: "INCREMENT_COUNTER"})}>Increment</button>
        <button onClick={() => dispatch({type: "DECREMENT_COUNTER"})}>Decrement</button>
        <button onClick={updateCounter}>Counter = 10</button>
        <p>{[10, 20, 30].map((n) => <button key={n} onClick={() => update(n)}>counter = {n}</button>)}</p>

        <Todos />
    </div>
  );
}

export default App;
