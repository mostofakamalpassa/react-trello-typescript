import React from "react";
export class SimpleComponent extends React.Component<{}, { count: number }> {
  render() {
    return null;
  }
}


// we can use  type 

type CounterStateType = {
    count: number;
}

// we can use  interface 
interface CounterStateInterface{
    count:number;
}

// we can use the object curly syntax 

/* 
    class abc<{counter:number}> {

    }
*/