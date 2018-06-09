import React from 'react';

const NoteList = ({list, onClick}) => (
  <ul className="list-group">
    {list.map(note => <li className="list-group-item" key={note.id} onClick={() => onClick(note.id)}>{note.title}</li>)}
  </ul>
);

export default NoteList;