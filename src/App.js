/*
import "./App.css";
import Jobs from "./component/Jobs";
import Data from "./data.json";
function App() {
  return (
    <div className="App">
      {Data.map((elem) => (
        <Jobs data={elem} />
      ))}
    </div>
  );
}

export default App;
*/

import { useState } from "react";
import "./App.css";
import Jobs from "./component/Jobs";
import Data from "./data.json";
function App() {
  const [counter, setConter] = useState(0);

  const inc = () => {
    if (counter == Data.length - 1) {
      setConter(0);
    } else {
      setConter(counter + 1);
    }
  };

  const dec = () => {
    if (counter == 0) {
      setConter(Data.length - 1);
    } else {
      setConter(counter - 1);
    }
  };

  return (
    <div className="App">
      <Jobs data={Data[counter]} />
      <div>
        <button style={{ color: "red", fontSize: 100 }} onClick={inc}>
          +
        </button>
        <button style={{ color: "red", fontSize: 100 }} onClick={dec}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
