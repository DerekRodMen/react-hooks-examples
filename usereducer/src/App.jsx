import React, { useReducer } from 'react';
import './App.css';

const initialState = { count: 0 };

// Definimos un reductor que maneja las acciones
function reducer(state, action) {
  switch (action.type) {
    case 'incrementar':
      return { count: state.count + 1 };
    case 'disminuir':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <h1>useReducer Example</h1>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'disminuir' })}>Disminuir</button>
    </div>
  );
}

export default App;
