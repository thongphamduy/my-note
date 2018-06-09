import React from 'react';
import PropTypes from 'prop-types';

const Note = ({note}) => (
  <div>
    <h2><small>{note.title}</small></h2>
    <div>{note.content}</div>
  </div>
);

export default Note;

Note.prototype = {
  note: PropTypes.object,
};