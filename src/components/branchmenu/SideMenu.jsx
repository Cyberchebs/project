import React from "react";
import "./data";
import MenuList from "./menu-list";
import './style.css'


const SideMenu = ({ menus = [] }) => {
  return (
    <div className="tree-view-container">
    <MenuList list={menus} />
    </div>
  );
};

export default SideMenu;
