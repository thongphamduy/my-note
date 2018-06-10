import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ onAddNewNote }) => (
  <div>
    <button type="button" className="btn btn-light" onClick={onAddNewNote}>New Note</button>
  </div>
);

Menu.propTypes = {
  onAddNewNote: PropTypes.func.isRequired,
};
export default Menu;
