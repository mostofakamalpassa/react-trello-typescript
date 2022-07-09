import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Element from "./components/Element";
import styled from "styled-components";
import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { Card } from "./components/Card";

export const App = () => {
  const buttons: React.CSSProperties = {
    backgroundColor: "#5aac44",
    borderRadius: "3px",
    border: "none",
    boxShadow: "none",
  };
  return (
    <>
      <AppContainer>
        <Column text="To Do">
          <Card text="Generate app scaffold" />
        </Column>
        <Column text="In Progress">
          <Card text="Learn Typescript" />
        </Column>
        <Column text="Done">
          <Card text="Begin to use static typing" />
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
