import React, { Suspense, useEffect } from "react";
import "./App.css";
import { AutoBatchEventHandler } from "./components/AutoBatchEventHandler";
import { AutoBatchOther } from "./components/AutoBatchOther";
import { Transition } from "./components/Transition";
import { ReactQuery } from "./components/ReactQuery";

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <ReactQuery />
      </Suspense>
    </div>
  );
}

export default App;
