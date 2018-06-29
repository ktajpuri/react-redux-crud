import React from 'react';
import { connect } from 'react-redux';
import { addToCart, updateCart, deleteFromCart }  from '../actions/cart-actions';
const App = props => 
{
	return <div>
		{props.cart.map((item,index) => <h1 key={index}>Redux Shopping Cart {item.product}  {item.quantity}  {item.unitCost}</h1>)}
		<button onClick={() => props.addToCart('tea 200kg', 23, 1.5)}>Add product to cart </button>
    <button onClick={() => props.updateCart('tea 200kg', 21, 1.7)}>Update product in cart </button>
    <button onClick={() => props.deleteFromCart('tea 200kg')}>Delete from cart </button>
	</div>;
}


const mapStateToProps = state => {
  return {
    cart: state.shoppingCart.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (a,b,c) => dispatch(addToCart(a,b,c)),
    updateCart: (a,b,c) => dispatch(updateCart(a,b,c)),
    deleteFromCart: (a) => dispatch(deleteFromCart(a)),
  }
}

export default connect(
  mapStateToProps,mapDispatchToProps
)(App);