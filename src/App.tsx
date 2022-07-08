import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Element from "./components/Element";
import styled from "styled-components";
import { AppContainer } from "./styles";

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
        <div style={{ backgroundColor: "red" }}>Styled element</div>
        <div className="styled">React element</div>;
        <Element />
      </AppContainer>
    </>
  );
};

//export App;
