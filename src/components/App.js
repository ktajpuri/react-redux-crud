import React from 'react';
import { connect } from 'react-redux';
import {addToCart, updateCart, deleteFromCart, fetchTodos}  from '../actions/cart-actions';
import UpdateForm  from './UpdateForm';
import CartItem  from './CartItem';
class App extends React.Component { 
  componentDidMount() {
   this.props.fetchTodos();
  }

  calculateTotalCartValue = () => {
    return this.props.cart.reduce((acc, curr) => {
        return acc + (parseInt(curr.quantity) * parseFloat(curr.unitCost));
    }, 0);
  }

  render () {
    const { loading } = this.props;
	return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Redux shopping cart</h4>
            <p>Aww yeah, you successfully behold your beautiful shopping cart powered by react and redux!</p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>

          {loading && <h3 className='text-warning'>Loading ...</h3>}
          {!loading && <h3>Total cart value: {this.calculateTotalCartValue()}</h3>}
          {!loading && this.props.cart.map((item,index) => <CartItem {...item} key={index} deleteItem={this.props.deleteFromCart}/>)}
                {/*<button onClick={() => this.props.addToCart('tea 200kg', 23, 1.5)}>Add product to cart </button>
                <button onClick={() => this.props.updateCart('tea 200kg', 21, 1.7)}>Update product in cart </button>
                <button onClick={() => this.props.deleteFromCart('tea 200kg')}>Delete from cart </button>*/}
        </div>
        <div className='col'>
          <UpdateForm addToCart={this.props.addToCart} />
        </div>
      </div>
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