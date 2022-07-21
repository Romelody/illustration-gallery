import React from "react";
import MenuItem from './MenuItem'
import info from '../info/info'

const menuItems = info.menu
console.log('menu ' + menuItems.map((menuItemLog) => menuItemLog.name))
const Menu = () => {
  return (
    <div className="menu">
        {menuItems.map((menuItem) => {
            return (
                <MenuItem menuItem={menuItem}/>
            )
        })}
    </div>
  );
}

export default Menu;