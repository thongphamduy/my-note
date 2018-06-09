import React from 'react';

const Menu = ({ onAddNewNote }) => (
  <div>
    <button type="button" className="btn btn-light" onClick={onAddNewNote}>New Note</button>
  </div>
);

export default Menu;
