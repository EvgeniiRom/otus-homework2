import React, { Component } from "react";

import "../styles/App.css";

interface AppProps {
  text: string
}

const App = (props: AppProps) => {
  return (
    <div>
      <h1>My React App!</h1>
      {props.text}
    </div>
  );
}


export default App;
