import "./App.css";
import { AutoBatchEventHandler } from "./components/AutoBatchEventHandler";
import { AutoBatchOther } from "./components/AutoBatchOther";
import { Transition } from "./components/Transition";
import { ReactQuery } from "./components/ReactQuery";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      <ErrorBoundary fallback={<div>Error!</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
