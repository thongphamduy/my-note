import PropTypes from 'prop-types';
import React from 'react';

const Menu = ({ onAddNewNote, onDeleteNote }) => (
  <div>
    <button type="button" className="btn btn-light" onClick={onAddNewNote}>
      <span className="fas fa-plus"></span>
    </button>
    <button type="button" className="btn btn-light" onClick={onDeleteNote}>
      <span className="far fa-trash-alt"></span>
    </button>
  </div>
);

Menu.propTypes = {
  onAddNewNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};
export default Menu;
