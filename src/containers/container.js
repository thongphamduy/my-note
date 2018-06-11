import React from 'react';
import Menu from '../components/menu';
import NoteList from '../components/note-list';
import Note from '../components/note';
import SearchNote from '../components/search-note';

export default class Container extends React.Component {
  state = {
    selectedNoteId: null,
    notes: JSON.parse(localStorage.getItem('notes')) || [], // eslint-disable-line
    searchText: '',
  }

  handleOnClick = (id) => {
    this.setState({ selectedNoteId: id });
  }

  handleAddNewNote = () => {
    const currentNotes = this.state.notes;
    const removedEmptyNotes = currentNotes.filter(note => note.title || note.content);
    const id = new Date().getTime();
    this.setState({
      notes: [
        {
          title: '',
          content: '',
          id,
        },
        ...removedEmptyNotes,
      ],
      selectedNoteId: id,
    });
  }

  handleDeleteNote = () => {
    const { notes, selectedNoteId } = this.state;
    const remainNotes = notes.filter(note => note.id !== selectedNoteId);
    this.setState({
      notes: remainNotes,
      selectedNoteId: null,
    });
  }

  onUpdateNote = (value, id, type) => {
    const { notes } = this.state;
    const updatingNoteIndex = notes.findIndex(note => note.id === id);
    notes[updatingNoteIndex][type] = value;
    this.setState({
      selectedNoteId: id,
      notes,
    });
  }

  componentDidUpdate = () => {
    localStorage.setItem('notes', JSON.stringify(this.state.notes)); // eslint-disable-line
  }

  handleTyping = (e) => {
    this.setState({ searchText: e.target.value });
  }

  render() {
    const { selectedNoteId, searchText, notes } = this.state;
    const filteredNotes = notes.filter(note => note.title.indexOf(searchText) > -1 || note.content.indexOf(searchText) > -1); // eslint-disable-line
    const noteToDisplay = filteredNotes.find(note => note.id === selectedNoteId);
    return (
      <div className="row">
        <div className="col-sm-4">
          <SearchNote handleTyping={this.handleTyping} searchText={searchText}/>
          <NoteList list={filteredNotes} onClick={this.handleOnClick}/>
        </div>
        <div className="col-sm-8">
          <Menu onAddNewNote={this.handleAddNewNote} onDeleteNote={this.handleDeleteNote}/>
          {noteToDisplay && <Note note={noteToDisplay} onUpdateNote={this.onUpdateNote}/>}
        </div>
      </div>
    );
  }
}
