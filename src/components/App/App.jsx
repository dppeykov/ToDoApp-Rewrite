import React, { Component } from "react";
import Header from "../Header/Header";
import Counters from "../Counters/Counters";
import ToDoInputFiled from "../ToDoInputField/ToDoInputField";
import AllDone from "../AllDone/AllDone";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      toDoItems: [],
      itemsDone: [],
      userName: "",
      newTextValue: "",
      noInputButClicked: false
    };
  }

  changeNameHandler = e => this.setState({ userName: e.target.value });

  savingNewTasksText = e => this.setState({ newTextValue: e.target.value });

  addingMoreTasksHandler = e => {
    if (this.state.newTextValue === "") {
      this.setState({ noInputButClicked: true });
    } else {
      let newItem = {
        action: this.state.newTextValue,
        id: Date.now().toString()
      };
      this.setState({
        todoItems: [...this.state.todoItems, newItem],
        newTextValue: "",
        noInputButClicked: false
      });
    }
  };

  render() {
    let {
      toDoItems,
      itemsDone,
      userName,
      newTextValue,
      noInputButClicked
    } = this.state;

    return (
      <div>
        <Header userName={userName} changingUserName={this.changeNameHandler} />
        <Counters itemsLeft={toDoItems.length} itemsDone={itemsDone.length} />
        <ToDoInputFiled
          savingTheText={this.savingNewTasksText}
          currentText={newTextValue}
          addingNewItem={this.addingMoreTasksHandler}
        />
        {toDoItems.length === 0 ? (
          <div>
            <AllDone />
            <h1>HERE WILL BE THE DONE</h1>
          </div>
        ) : (
          <h1>Here will be not done + ALL DONE</h1>
        )}
      </div>
    );
  }
}
