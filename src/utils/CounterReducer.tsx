interface States {
  count: number;
}

// interface Action {
//   type: string;
// }
export type Action =
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    };

export const counterReducer = (state: States, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
