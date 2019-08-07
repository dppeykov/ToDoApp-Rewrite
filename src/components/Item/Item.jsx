import React from "react";

const Item = ({ action, checked, id, toggleDoneHandler }) => {
  return (
    <div>
      {action}
      <input type="checkbox" onChange={e => toggleDoneHandler(e, id)} />
    </div>
  );
};

export default Item;
