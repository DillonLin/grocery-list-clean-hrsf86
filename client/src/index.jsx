import React from 'react';
import ReactDOM from 'react-dom';
import groceryList from '../../database/data.js';
import GroceryList from './components/GroceryList.jsx'

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
        <div>
          <GroceryList groceryList={this.state.list.groceryList} />
        </div>
        <div>
        </div>
      </div>
      
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));