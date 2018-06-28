import React from 'react';
import MenuContainer from './containers/menu';
import NoteListContainer from './containers/notesList';
import NoteContainer from './containers/note';
import SearchNoteContainer from './containers/SearchNote';
import './App.css';
import SelectContainer from './containers/Select';

const App = () => (
  <div className="container">
    <div className="row">
        <div className="col-sm-4 .row-eq-height">
          <SearchNoteContainer/>
          <NoteListContainer/>
          <SelectContainer/>
        </div>
        <div className="col-sm-8 .row-eq-height d-flex flex-column align-content-stretch">
          <MenuContainer/>
          <NoteContainer/>
        </div>
      </div>
  </div>
);

export default App;
