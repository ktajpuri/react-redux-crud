import React from 'react';

const CartItem = ({product, quantity, unitCost}) => {
	return <div className='card mb-3'>
	  <div className='card-body'>
    	<div className='alert alert-primary' role='alert'>
				<h5>{product.toUpperCase()}</h5>
		</div>
	    <p className='card-text'><strong>Quantity : </strong> {quantity}</p>
	    <p className='card-text'><strong>Rate : </strong> {unitCost}</p>
	    <div class="btn-group" role="group">
	    	<button type="button" class="btn btn-secondary mr-2">Update</button>
	    	<button type="button" class="btn btn-secondary">Delete</button>
	    </div>
	  </div>
	</div>;
}

export default CartItem;