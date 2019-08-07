import React, { Component } from "react";
import Header from "../Header/Header";
import Counters from "../Counters/Counters";
import Alert from "../Alert/Alert";
import ToDoInputFiled from "../ToDoInputField/ToDoInputField";
import AllDoneInfoText from "../AllDone/AllDone";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      toDoItems: [],
      userName: "",
      newTextValue: "",
      noInputButClicked: false
    };
  }

  changeNameHandler = e => this.setState({ userName: e.target.value });

  savingNewTasksText = e => this.setState({ newTextValue: e.target.value });

  addingMoreTasksHandler = e => {
    if (!this.state.newTextValue) {
      this.setState({ noInputButClicked: true });
    } else {
      this.setState({
        toDoItems: [
          ...this.state.toDoItems,
          {
            id: new Date().valueOf(),
            action: this.state.newTextValue
          }
        ],
        newTextValue: "",
        noInputButClicked: false
      });
    }
  };

  render() {
    let { toDoItems, userName, newTextValue, noInputButClicked } = this.state;

    let NumberOfItemsLeft = toDoItems.filter(item => item.done === true).length;

    return (
      <div>
        <Header userName={userName} changingUserName={this.changeNameHandler} />
        <Counters itemsLeft={toDoItems.length} itemsDone={NumberOfItemsLeft} />
        <ToDoInputFiled
          savingTheText={this.savingNewTasksText}
          currentText={newTextValue}
          addingNewItem={this.addingMoreTasksHandler}
        />
        <Alert empty={noInputButClicked} />
        {toDoItems.length === 0 ? (
          <div>
            <AllDoneInfoText />
            <h1>HERE WILL BE THE DONE</h1>
          </div>
        ) : (
          <h1>Here will be not done + ALL DONE</h1>
        )}
      </div>
    );
  }
}
