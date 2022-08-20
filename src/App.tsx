import React from "react";
import Test from "./app/Test";
import Counter from "./features/counter/Counter";

function App(): JSX.Element {
  return (
    <div className="App">
      <Test />
      <Counter />
    </div>
  );
}

export default App;
