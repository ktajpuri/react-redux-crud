import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions  from '../actions/cart-actions';
const App = props => 
{
	return <div>
		{props.cart.map((item,index) => <h1 key={index}>Redux Shopping Cart {item.product}  {item.quantity}  {item.unitCost}</h1>)}
		<button onClick={() => props.cartActions.addToCart('tea 200kg', 23, 1.5)}>Add product to cart </button>
    <button onClick={() => props.cartActions.updateCart('tea 200kg', 21, 1.7)}>Update product in cart </button>
    <button onClick={() => props.cartActions.deleteFromCart('tea 200kg')}>Delete from cart </button>
	</div>;
}


const mapStateToProps = state => {
  return {
    cart: state.shoppingCart.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(
  mapStateToProps,mapDispatchToProps
)(App);