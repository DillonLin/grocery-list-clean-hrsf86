import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { 
    }
  }

  render () {
    return null;
  }
}

AddGrocery.propTypes = {
};

export default AddGrocery;

window.AddGrocery = AddGrocery;