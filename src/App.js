import './App.css';
import React, {useState} from 'react'

function App() {

  let [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase Count</button>
    </div>
  );
}

export default App;
