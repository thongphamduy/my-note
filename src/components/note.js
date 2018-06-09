import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ note }) => (
  <div>
    <h2><small>{note.title}</small></h2>
    <div>{note.content}</div>
  </div>
);

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Note;
