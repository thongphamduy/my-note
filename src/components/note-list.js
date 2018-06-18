import PropTypes from 'prop-types';
import React from 'react';
import './note-list.css';

const NoteList = ({
  list, onClick, activeNote,
}) => (
  <ul className="list-group scrollable">
    {list.map(note => <li
      className={`list-group-item
      ${activeNote === note.id ? 'selected' : null}`}
      key={note.id}
      onClick={() => onClick(note.id)}>
        <h5 className="m-0 ellipsis">{note.title || 'No title'}</h5>
        <p className="m-0 ellipsis">{note.content || 'No content'}</p>
        <div className="text-right">{note.tags.map(tag =>
        <span key={tag.value} className="border border-secondary rounded mr-1 mt-0 p-1 small">{tag.value}</span>)}</div>
      </li>)}
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
