import React from "react";
import ItemsTable from "../ItemsTable/ItemsTable";

const ItemsList = ({ allItemsFromState, toggleDoneHandler }) => {
  let ToDo = allItemsFromState.filter(item => item.done === false);
  let Done = allItemsFromState.filter(item => item.done === true);

  return (
    <div>
      <h1>All items left to be done:</h1>
      <ItemsTable list={ToDo} toggleDoneHandler={toggleDoneHandler} />
      <h1>All items done:</h1>
      <ItemsTable list={Done} toggleDoneHandler={toggleDoneHandler} />
    </div>
  );
};

export default ItemsList;
