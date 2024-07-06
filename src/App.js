import "./App.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import router from "./routes";

function App() {
  const myroutes = useRoutes(router);
  return <>{myroutes}</>;
}
export default App;
