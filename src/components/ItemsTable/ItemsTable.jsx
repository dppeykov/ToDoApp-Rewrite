import React from "react";
import Item from "../Item/Item";

const ItemsTable = ({ list, toggleDoneHandler }) => {
  return list.map(item => (
    <div key={item.id}>
      <Item
        action={item.action}
        checked={item.done}
        id={item.id}
        toggleDoneHandler={toggleDoneHandler}
      />
    </div>
  ));
};

export default ItemsTable;
