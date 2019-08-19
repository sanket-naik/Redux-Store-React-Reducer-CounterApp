import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions/index'

function App() {
  const counter=useSelector((state)=>state.counter)
  const isLogged=useSelector((state)=>state.isLogged)

  const dispatch=useDispatch();

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {isLogged?<h3>Is Logged In...</h3>:''}
    </div>
  );
}

export default App;
