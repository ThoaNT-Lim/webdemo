const initization = {
    cart: [],
}
const cartReducer = (state = initization, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newCart = [...state.cart];
            newCart.push(action.id);
            return {
                ...state,
                cart: newCart
            };
        }
        default: {
            return  state
    }
    }

}

export default cartReducer;