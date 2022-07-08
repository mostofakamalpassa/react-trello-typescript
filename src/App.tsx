import React from "react";
import logo from "./logo.svg";
import "./App.css";

export const App = () => {
  const buttons: React.CSSProperties = {
    backgroundColor: "#5aac44",
    borderRadius: "3px",
    border: "none",
    boxShadow: "none",
  };
  return (
    <>
      <div style={{ backgroundColor: "red" }}>Styled element</div>
      <div className="styled">React element</div>;
    </>
  );
};

//export App;
