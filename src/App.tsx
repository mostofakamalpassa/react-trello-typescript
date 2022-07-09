import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import Element from "./components/Element";
import styled from "styled-components";
import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { Card } from "./components/Card";
import { counterReducer } from "./utils/CounterReducer";
import {Action} from './utils/CounterReducer';
import {useAppState} from './components/AppStateContext'

export const App = () => {
  const buttons: React.CSSProperties = {
    backgroundColor: "#5aac44",
    borderRadius: "3px",
    border: "none",
    boxShadow: "none",
  };
  const {lists} = useAppState();

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const increment = (): Action => ({ type: "increment" });
  const decrement = (): Action => ({ type: "decrement" });
  return (
    <>
      <AppContainer>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <Column text="To Do"  id='33' >
          <Card text="Generate app scaffold"/>
        </Column>
   
        <div style={{ backgroundColor: "red" }}>Styled element</div>
        <div className="styled">React element</div>;
        {/* <Column><p>hello Bangaldesh</p></Column> */}
        {/* <Element /> */}
        <AddNewItem
          toggleButtonText="+ add another list"
          onAdd={console.log}
        ></AddNewItem>
      </AppContainer>
    </>
  );
};

//export App;
