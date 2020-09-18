export default function cartReducer(currentState, action) {
    switch (action.type) {
        case "empty":
            return [];
        case "add":
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

        default:
            throw new Error("Unhandled action " + action.type);
    }
}
