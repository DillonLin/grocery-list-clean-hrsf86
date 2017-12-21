import React from 'react';
import ReactDOM from 'react-dom';
import groceryList from '../../database/data.js';
import GroceryList from './components/GroceryList.jsx'
import AddGrocery from './components/AddGrocery.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: groceryList
    }
  }
  
  render() {
    return (
      <div>
        <div className="addGrocery">
          <AddGrocery groceryList={this.state.list.groceryList}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));