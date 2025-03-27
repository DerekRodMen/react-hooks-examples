import { useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="container">
      <h1>useRef Example</h1>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>

    // cuando le dé click al boton de focus se va a marcar el cuadro de texto
  );
}

export default App;
