import React from "react";
import GitHubContainer from "./components/GitHubContainer";
import "./App.css";
import user from "./data";

function App() {
  return (
    <div className="App ">
      <h1 className="bg-primary m-2 p-2">React Life Cycle</h1>
      <GitHubContainer />
    </div>
  );
}

export default App;
