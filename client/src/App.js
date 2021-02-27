import React from "react";
import "./App.css";
import { useRouters } from "../src/routers";
function App() {
  const routers = useRouters();
  return <div className="App">{routers}</div>;
}

export default App;
