import React from 'react';
import { connect } from 'react-redux';
import {addToCart, updateCart, deleteFromCart, fetchTodos}  from '../actions/cart-actions';
class App extends React.Component { 
  componentDidMount() {
   this.props.fetchTodos();
  }

  render () {
    const { loading } = this.props;
	return (
    <div>
      {loading && 
        <h1>Loading...</h1>
      }

      {!loading && 
        <div>
      		{this.props.cart.map((item,index) => <h1 key={index}>Redux Shopping Cart {item.product}  {item.quantity}  {item.unitCost}</h1>)}
      		<button onClick={() => this.props.addToCart('tea 200kg', 23, 1.5)}>Add product to cart </button>
          <button onClick={() => this.props.updateCart('tea 200kg', 21, 1.7)}>Update product in cart </button>
          <button onClick={() => this.props.deleteFromCart('tea 200kg')}>Delete from cart </button>
      	</div>
      }
      </div>
  );
  }
}


const mapStateToProps = state => {
  return {
    cart: state.shoppingCart.cart,
    loading: state.shoppingCart.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (product, quantity, rate) => dispatch(addToCart(product, quantity, rate)),
    updateCart: (product, quantity, rate) => dispatch(updateCart(product, quantity, rate)),
    deleteFromCart: (product) => dispatch(deleteFromCart(product)),
    fetchTodos: () => dispatch(fetchTodos())
  }
}

export default connect(
  mapStateToProps,mapDispatchToProps
)(App);