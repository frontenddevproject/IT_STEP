import React from 'react'; 
import { Users } from './components/Users';
import { MainContextProvider } from './contexts/MainContext';
import { Posts } from './components/Posts';

import './App.css';


function App() {
  return (
    <div className="App">
      < MainContextProvider>
        <Users />
        <Posts />
      </ MainContextProvider>
    </div>
  );
}

export default App;

