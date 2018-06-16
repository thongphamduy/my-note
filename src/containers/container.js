import React from 'react';
import Menu from '../components/menu';
import NoteList from '../components/note-list';
import Note from '../components/note';
import SearchNote from '../components/search-note';
import './container.css';

export default class Container extends React.Component {
  state = {
    selectedNoteId: null,
    notes: JSON.parse(localStorage.getItem('notes')) || [], // eslint-disable-line
    searchText: '',
    categories: JSON.parse(localStorage.getItem('notes')) || [], // eslint-disable-line
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
          tags: [],
        },
        ...removedEmptyNotes,
      ],
      selectedNoteId: id,
      categories: [{ label: 'lab1', value: 'lab1' }, { label: 'lab2', value: 'lab2' }],
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
    localStorage.setItem('categories', JSON.stringify(this.state.categories)); // eslint-disable-line
  }

  handleTyping = (e) => {
    this.setState({ searchText: e.target.value });
  }

  handleUpdateCategory = (newValue, actionMeta) => {
    const { notes, selectedNoteId, categories } = this.state;
    const workingNoteId = notes.findIndex(note => note.id === selectedNoteId);
    switch (actionMeta.action) {
      case 'create-option': {
        const newOption = newValue.find(item => item.__isNew__); //eslint-disable-line
        categories.push(newOption);
        break;
      }
      case 'remove-value':
        notes[workingNoteId].tags = notes[workingNoteId]
          .tags.filter(tag => tag.value !== actionMeta.removedValue.value);
        break;
      default:
        console.log('not found');
    }
    notes[workingNoteId].tags = newValue;
    this.setState({ notes });
  }

  render() {
    const {
      selectedNoteId, searchText, notes, categories,
    } = this.state;
    const filteredNotes = notes.filter(note => note.title.indexOf(searchText) > -1 || note.content.indexOf(searchText) > -1); // eslint-disable-line
    const noteToDisplay = filteredNotes.find(note => note.id === selectedNoteId);
    console.log(notes);
    return (
      <div className="row">
        <div className="col-sm-4 .row-eq-height">
          <SearchNote handleTyping={this.handleTyping} searchText={searchText}/>
          <NoteList list={filteredNotes} onClick={this.handleOnClick} activeNote={selectedNoteId}/>
        </div>
        <div className="col-sm-8 .row-eq-height d-flex flex-column align-content-stretch">
          <Menu onAddNewNote={this.handleAddNewNote} onDeleteNote={this.handleDeleteNote}/>
          {noteToDisplay && <Note
            note={noteToDisplay}
            onUpdateNote={this.onUpdateNote}
            categories={categories}
            handleChange={this.handleUpdateCategory}
            tags={noteToDisplay.tags}
            />}
        </div>
      </div>
    );
  }
}
