import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './Redux/counterSlice'


function App() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div className='counter_app'>
      <h1>Counter by Redux: {count}</h1>
      <div className='counter'>
        <button className='increment' onClick={() => dispatch(increment())}>Increment</button>
         
          <button className='decrement' onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default App
