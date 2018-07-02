import  { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART, ADD_INITIAL_TODOS, TOGGLE_LOADING }  from '../actions/cart-actions';

const initialState = {
  cart: [],
  isLoading: false
}

export default function(state=initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }

    case ADD_INITIAL_TODOS: {
      return {
        ...state,
        cart: state.cart.concat(action.payload)
      }
    }

    case TOGGLE_LOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }

    case UPDATE_CART: {
      return {
        ...state,
        cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
      }
    }

    case DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product)
      }
    }

    default:
      return state;
  }
}