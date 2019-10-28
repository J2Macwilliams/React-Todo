import React, { Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state ={
      newItem: ""
    }
  }
 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleChanges = e => {
    
    this.setState({newItem:e.target.value})
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
       <form>
         <input 
         type="text"
         name="item"
         id="item"
         placeholder="Add New Item"
         onChange={this.handleChanges}
         />
         <button>Add Todo</button>
         <button>Clear Completed</button>
       </form>
        
      </div>
    );
  }
}

export default App;
