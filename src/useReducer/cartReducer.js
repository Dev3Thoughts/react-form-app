const ACTIONS = {
  ADD: "add",
  EMPTY: "empty",
  REMOVE: "remove",
};

export default function cartReducer(currentState, action) {
  switch (action.type) {
    case ACTIONS.EMPTY:
      return [];
    case ACTIONS.ADD: {
      const { id } = action;
      const itemInCart = currentState.find((i) => i.id === id);
      if (itemInCart) {
        // return new array with matching item replaced
        return currentState.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...currentState, { id, quantity: 1 }];
      }
    }
    case ACTIONS.REMOVE: {
      const { id } = action;
      return currentState.filter((i) => i.id === id);
    }

    default:
      throw new Error("Unhandled action " + action.type);
  }
}
