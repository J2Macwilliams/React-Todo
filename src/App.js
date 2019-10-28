import React, { Component} from 'react';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';

const data = [
  {
    name: 'Mow the Yard',
    id: 1,
    completed: false
  },
  {
    name: 'Wash Dishes',
    id: 2,
    completed: false
  }
]

class App extends Component {
  constructor(){
    super();
    this.state ={
      task: data
    }
  }
 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addItem = name => {
    const newItem = {
      name: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      task: [...this.state.task, newItem]
    });
  };

  toggleCompleted = id => {
    // loop through groceries data
    // find the grocery we clicked
    // toggle that grocery's purchased property
    this.setState({
      task: this.state.newItem.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });

  };

  render() {
    console.log('rendering...')
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          task={this.state.task}
          toggleCompleted={this.togglePurchased}
        />
       <TodoForm addItem={this.addItem}/>
        
      </div>
    );
  }
}

export default App;
