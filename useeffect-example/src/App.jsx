import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Initializing...');

  useEffect(() => {
    setMessage(`Count updated: ${count}`);
  }, [count]);

  return (
    <div className="container">
      <h1>useEffect Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
