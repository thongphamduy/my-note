import PropTypes from 'prop-types';

const Menu = ({ onAddNewNote, onDeleteNote }) => (
  <div>
    <button type="button" className="btn btn-light" onClick={onAddNewNote}>New Note</button>
    <button type="button" className="btn btn-light" onClick={onDeleteNote}>Delete Note</button>
  </div>
);

Menu.propTypes = {
  onAddNewNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};
export default Menu;
