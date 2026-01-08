import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // return (
  //   <>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //     </div>
  //   </>
  // );
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
