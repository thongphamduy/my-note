import PropTypes from 'prop-types';

const NoteList = ({ list, onClick }) => (
  <ul className="list-group">
    {list.map(note => <li className="list-group-item" key={note.id} onClick={() => onClick(note.id)}>{note.title}</li>)}
  </ul>
);

NoteList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NoteList;
