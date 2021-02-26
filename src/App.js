import React from "react";
import './App.css';
import Main from "./routing/routing";
import ButtonAppBar from "./components/appBar";

function App() {
  return (
      <div>
        <ButtonAppBar />
        <Main />
      </div>
      );
}


export default App;
