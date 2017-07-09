import React from 'react';

const MenuPanel = () => {
  const menus = ['Tresto', "Bonito's", 'McDonald', 'Jollibee'];

  return (
    <nav className="panel">
      <p className="panel-heading">Menus</p>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input type="text" className="input" placeholder="Search" />
          <span className="icon is-left">
            <i className="fa fa-search" />
          </span>
        </p>
      </div>
      {menus.map(menu =>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fa fa-book" />
          </span>
          {menu}
        </a>
      )}
    </nav>
  );
};

export default MenuPanel;
