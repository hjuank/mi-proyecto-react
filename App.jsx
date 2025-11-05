import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return(
    <div className="App">
    <h1> Contador Con React y Vite</h1>
    <p>Has hecho clic {count} veces</p>
    <button onClick={() => setCount(count + 1)}>incrementar</button>
    <button onClick={() => setCount(count - 1)}>decrementar</button>
    </div>
  );
}
export default App;


