import React from 'react';

class UpdateForm extends React.Component {
constructor(props) {
	super(props);
	this.state = {product: '',quantity:0, rate:0}
}

handleSubmit = (event) => {
event.preventDefault();
this.props.addToCart(this.state.product, this.state.quantity, this.state.rate);
}

productChanged =(event) => {
	this.setState({product: event.target.value});
}

quantityChanged =(event) => {
	this.setState({quantity: event.target.value});
}

rateChanged =(event) => {
	this.setState({rate: event.target.value});
}
render() {
	return <form onSubmit={this.handleSubmit}>
			<h3>Add product to cart</h3>
			  <div className='form-group'>
			    <label htmlFor='product'>Product</label>
			    <input type='text' className='form-control' id='product' placeholder='Product' value={this.state.product} onChange={this.productChanged} />
			  </div>
			  <div className='form-group'>
			    <label htmlFor='quantity'>Quantity</label>
			    <input type='text' className='form-control' id='quantity' placeholder='Quantity' value={this.state.quantity} onChange={this.quantityChanged} />
			  </div>
			  <div className='form-group'>
			    <label htmlFor='rate'>Rate</label>
			    <input type='text' className='form-control' id='rate' placeholder='Rate' value={this.state.rate} onChange={this.rateChanged} />
			  </div>
			  <button type='submit' className='btn btn-primary'>Submit</button>
			</form>;
}
}

export default UpdateForm;