import React from 'react';	
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => (
  <div className="groceries"> {console.log(props)}
  	{props.groceryList.map((item) => <GroceryItem item = {item} key = {item.id} />)}
  </div>
)

export default GroceryList;
