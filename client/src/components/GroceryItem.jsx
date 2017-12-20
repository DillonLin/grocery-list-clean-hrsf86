import React from 'react';

const GroceryItem = (props) => (
	  <div className="list-body">{props.item.description + ' ' + props.item.quantity}</div>
)

export default GroceryItem;
