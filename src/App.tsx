import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AutoBatchEventHandler } from "./components/AutoBatchEventHandler";
import { AutoBatchOther } from "./components/AutoBatchOther";

function App() {
  console.log("Hello from App.tsx @18");
  useEffect(() => console.log("useEffect called"), []);
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
    </div>
  );
}

export default App;
