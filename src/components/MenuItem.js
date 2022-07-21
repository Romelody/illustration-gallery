import React from "react";

const MenuItem = ({menuItem}) => {
  return (
    <div className='menuItem'>
        <p>{menuItem.name}</p>
    </div>
  );
}

export default MenuItem;