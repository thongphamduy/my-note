import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';
import React from 'react';

const Menu = ({ onAddNewNote, onDeleteNote }) => (
  <div>
    <button type="button" className="btn btn-light" onClick={onAddNewNote}>
      <FontAwesomeIcon icon={faPlus}/>
    </button>
    <button type="button" className="btn btn-light" onClick={onDeleteNote}>
      <FontAwesomeIcon icon={faTrash}/>
    </button>
  </div>
);

Menu.propTypes = {
  onAddNewNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};
export default Menu;
