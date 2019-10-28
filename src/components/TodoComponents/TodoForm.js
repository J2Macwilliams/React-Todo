import React, { Component} from 'react';

class TodoForm extends Component {
    constructor(){
        super();
        this.state ={
            newItem: ''
        }
    };


    handleChanges = e => {
        this.setState({
        newItem: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("it's working!");
        this.props.addItem(this.state.newItem);
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                name="item"
                id="item"
                placeholder="Add New Item"
                onChange={this.handleChanges}
                />
                <button>Add Todo</button>
                <button onClick={e => 
                {e.preventDefault();
                this.props.filterItems()
                }}>Clear Completed</button>
            </form>
        );
    }
}
export default TodoForm