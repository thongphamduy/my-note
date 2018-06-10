import React from 'react';
import Menu from '../components/menu';
import NoteList from '../components/note-list';
import Note from '../components/note';
import PropTypes from 'prop-types';
import SearchNote from '../components/search-note';

export default class Container extends React.Component {
  static defaultProps = {
    data: []
  }

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  state = {
    selectedNoteId: null,
    notes: this.props.data,
    searchText: "",
  }

  handleOnClick = (id) => {
    this.setState({selectedNoteId: id});
  }

  handleAddNewNote = () => {
    const currentNotes = this.state.notes;
    const removedEmptyNotes = currentNotes.filter(note => note.title || note.content);
    const id = new Date().getTime();
    this.setState({notes: [
      {
        title: '',
        content: '',
        id,
      },
      ...removedEmptyNotes
    ],
    selectedNoteId: id,
    })
  }

  handleDeleteNote = () => {
    const { notes, selectedNoteId } = this.state;
    const remainNotes = notes.filter(note => note.id !== selectedNoteId);
    this.setState({
      notes: remainNotes,
      selectedNoteId: null,
    })
  }

  onUpdateNote = (value, id, type) => {
    const notes = this.state.notes;
    const updatingNoteIndex = notes.findIndex(note => note.id === id);
    notes[updatingNoteIndex][type] = value;
    this.setState({
      selectedNoteId: id,
      notes,
    })
  }

  onHandleTyping = (text) => {
    this.setState({searchText: text});
  }

  render() {
    const { selectedNoteId, searchText, notes } = this.state;
    const filteredNotes = notes.filter(note => note.title.indexOf(searchText) !== -1 || note.content.indexOf(searchText) !== -1);
    const noteToDisplay = filteredNotes.find(note => note.id === selectedNoteId);
    return (
      <div className="row">
        <div className="col-sm-4">
          <SearchNote onHandleTyping={this.onHandleTyping}/>
          <NoteList list = {filteredNotes} onClick={this.handleOnClick}/>
        </div>
        <div className="col-sm-8">
          <Menu onAddNewNote={this.handleAddNewNote} onDeleteNote={this.handleDeleteNote}/>
          {noteToDisplay && <Note note={noteToDisplay} onUpdateNote={this.onUpdateNote}/>}
        </div>
      </div>
    );
  }
}