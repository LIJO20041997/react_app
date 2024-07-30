import './app.css'  
import {useState} from 'react';                     
import Counter from './Counter';

function App() {
  const [Count, setCount] = useState(0)
  const [Minus, setMinus] = useState(10)

    const addCount= ()=> {
      setCount(Count+1)
    }

      const minusCount= ()=> {
      setMinus(Minus-1)
    }
  return (
    <div>
      <button onClick={addCount}>
        Add
      </button>


      <Counter Count={Count}/>


      <button onClick={minusCount}>
        Minus
      </button>
      <h1>Minus_Counter: {Minus}</h1>
    </div>
  );
}
export const use='a'
export default App;

