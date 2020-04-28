import React, { Component } from "react";
import TodoItems from "../todoItems/todoItems";
import "./todoList.css";
 
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    };
    addItem(e) {
        if(this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }
        }
        this.setState((previousState) => {
            return {
                items: previousState.items.concat(newItem)
            };
        });
        // Clear input
        this._inputElement.value = "";

        //check data
        console.log(this.state.items);
        e.preventDefault();
    };
    deleteItem(key) {
        // create a new array called filteredItems that contains everything except the item we are removing.
        // set filteredItems as our new items property on our state object
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
        this.setState({
            items: filteredItems
          });
    };
    render() {
        return (
        <div className="todoListMain">
            <div className="header">
            <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a}  placeholder="enter task">
                </input>
                <button type="submit">add</button>
            </form>
            </div>
            <TodoItems entries={this.state.items} delete={this.deleteItem}/>
        </div>
        );
    };
}
 
export default TodoList;