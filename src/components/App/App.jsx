import React, { Component } from "react";
import Header from "../Header/Header";
import Counters from "../Counters/Counters";
import Alert from "../Alert/Alert";
import ToDoInputFiled from "../ToDoInputField/ToDoInputField";
import AllDoneInfoText from "../AllDoneInfoText/AllDoneInfoText";
import ItemsList from "../ItemsList/ItemsList";

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
            action: this.state.newTextValue,
            done: false
          }
        ],
        newTextValue: "",
        noInputButClicked: false
      });
    }
  };

  toggleDoneHandler = (e, id) => {
    this.setState({
      toDoItems: this.state.toDoItems.map(item =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    });
  };

  render() {
    let { toDoItems, userName, newTextValue, noInputButClicked } = this.state;
    let NumberOfItemsDone = toDoItems.filter(item => item.done === true).length;

    console.log(this.state.toDoItems);

    return (
      <div>
        <Header userName={userName} changingUserName={this.changeNameHandler} />
        <Counters
          itemsLeft={toDoItems.length - NumberOfItemsDone}
          itemsDone={NumberOfItemsDone}
        />
        <ToDoInputFiled
          savingTheText={this.savingNewTasksText}
          currentText={newTextValue}
          addingNewItem={this.addingMoreTasksHandler}
        />
        <Alert empty={noInputButClicked} />
        {toDoItems.length === 0 ? (
          <AllDoneInfoText />
        ) : (
          <div>
            <ItemsList
              allItemsFromState={toDoItems}
              toggleDoneHandler={this.toggleDoneHandler}
            />
          </div>
        )}
      </div>
    );
  }
}
