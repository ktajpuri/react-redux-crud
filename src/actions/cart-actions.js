export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const ADD_INITIAL_TODOS = 'ADD_INITIAL_TODOS';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';

export const fetchTodos = () => {
    return function (dispatch) {
    dispatch(toggleLoading(true));
    return fetch('http://mock-wholesaleonline.getsandbox.com/testRedux')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(toggleLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(addInitialTodos(items)))/*
            .catch(() => dispatch(itemsHasErrored(true)))*/;
  };
}

export function toggleLoading(loading) {
  return {
    type: TOGGLE_LOADING,
    payload: loading
  }
}

export function addInitialTodos(todoArray) {
  return {
    type: ADD_INITIAL_TODOS,
    payload: todoArray
  }
}

export function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitCost }
  }
}

export function updateCart(product, quantity, unitCost) {
  return {
    type: UPDATE_CART,
    payload: {
      product,
      quantity,
      unitCost
    }
  }
}

export function deleteFromCart(product) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      product
    }
  }
}