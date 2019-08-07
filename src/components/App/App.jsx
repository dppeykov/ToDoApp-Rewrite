import React, { Component } from "react";

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

  render() {
    return <div>Hello from React</div>;
  }
}
