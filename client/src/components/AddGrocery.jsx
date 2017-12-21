import React from 'react';
import GroceryList from './GroceryList.jsx';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	list: this.props.groceryList,
    }
  }

  clickingButton() {
  	var description = document.getElementById('groceryDescription').value.trim();
  	var quantity = +document.getElementById('groceryQuantity').value.trim();
  	var flag = false;
		for(var i = 0; i < this.state.list.length; i++) {
			console.log(this.state.list[i].description);
			if(description === this.state.list[i].description) {
				this.state.list[i].quantity = this.state.list[i].quantity + quantity;
				this.setState({
					list: this.state.list
				}, () => {console.log(this.state.list)})
				flag = true;
			}
		}
		if(!flag) {
			newItem();
		}
  }

  newItem() {
  	this.setState({
			list: [...this.state.list, {id: this.state.list.length + 1, quantity: quantity, description: description}]
		}, () => {console.log(this.state.list)});
  }

  render() {
    return (
    	<div>
	    	<div>{'Description: '}<input id="groceryDescription" type="text" defaultValue={''} />
	    	</div>

	    	<div>{'Quantity: '}<input id="groceryQuantity" type="text" defaultValue={0} />
	    	<input id="addButton" type="button" onClick={this.clickingButton.bind(this)} value={'Add Grocery'}/>
	    	</div>

				<div className="groceryList">
          <GroceryList groceryList={this.state.list} />
        </div>

	    </div>
    )
  }
}

export default AddGrocery;
