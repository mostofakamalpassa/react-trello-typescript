import React,{ ReactNode } from "react";

type CounterState = {
  count: number;
};

export class Counter extends React.Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  private increment = () => {};

  private decrement = () => {};

  render(): ReactNode {
    return (
      <>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}
