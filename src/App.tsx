import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import "./App.css";
import { AutoBatchEventHandler } from "./components/AutoBatchEventHandler";
import { AutoBatchOther } from "./components/AutoBatchOther";
import { Transition } from "./components/Transition";
import { ReactQuery } from "./components/ReactQuery";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

function App() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />

      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <>
            <div>Error!</div>
            <button onClick={() => resetErrorBoundary()}>Try again</button>
          </>
        )}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
