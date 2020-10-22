export const initialState = {
    cart: [],
};

export const getCartSubtotal = (cart) => cart?.reduce((total, item) => item.price + total, 0);

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.item] };

        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter((item) => item.id !== action.item.id) };

        default:
            return state;
    }
};

export default reducer;
