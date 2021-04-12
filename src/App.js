import './App.css';
import {Button, DatePicker, version} from "antd";
import React from "react"

function App() {
  return (
    <div className="App">
      <h1>antd version: {version}</h1>
      <DatePicker/>
      <Button type="primary" style={{marginLeft: 8}}>Button</Button>
    </div>
  );
}

export default App;
