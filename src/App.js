import React, { Component} from 'react';

import TodoForm from './components/TodoComponents/TodoForm'

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
  addItem = name => {
    const newItem = {
      name: name,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      newItem: [...this.state.newItem, newItem]
    });
  };


  render() {
    console.log('rendering...')
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
       <TodoForm addItem={this.addItem}/>
        
      </div>
    );
  }
}

export default App;
