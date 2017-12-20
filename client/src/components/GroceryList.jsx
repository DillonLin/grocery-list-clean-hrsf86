import React from 'react';	
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => (
  // <div className="groceries">{props.groceryList.map((item, index) => <GroceryItem item={item} key={index} /> )}</div>
  <div className="groceries">
  	{props.groceryList.map((item) => <GroceryItem item = {item} key = {item.id} />)}
  </div>
)

export default GroceryList;
