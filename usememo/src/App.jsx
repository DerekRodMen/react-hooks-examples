import React, { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(1);

  // useMemo memoriza el resultado del cálculo
  const squaredNumber = useMemo(() => {
    console.log('Calculando el cuadrado');
    return number * number;
  }, [number]);

  return (
    <div className="container">
      <h1>useMemo Example</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>{number} al cuadrado es: {squaredNumber}</p>
    </div>
  );
}

export default App;
