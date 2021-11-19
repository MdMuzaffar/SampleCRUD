import logo from "./logo.svg";
import "./App.css";

import React, { Component, useState } from "react";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input type="text" placeholder="Add Items" onChange={itemEvent} />
          <button onClick={listItems}> + </button>

          <ol>
            {items.map((itemsval) => {
              return <li>{itemsval}</li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
