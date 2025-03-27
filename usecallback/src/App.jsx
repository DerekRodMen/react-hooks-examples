import React, { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // useCallback memoriza la función para evitar recrearla en cada renderizado
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="container">
      <h1>useCallback Example</h1>
      <p>Contador: {count}</p>
      <button onClick={incrementCount}>Incrementar contador</button>
    </div>
  );
}

export default App;
