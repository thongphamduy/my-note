import React from 'react';
import Menu from '../components/menu';
import NoteList from '../components/note-list';
import Note from '../components/note';
import PropTypes from 'prop-types';

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

  onUpdateNote = (value, id, type) => {
    const notes = this.state.notes;
    const updatingNoteIndex = notes.findIndex(note => note.id === id);
    notes[updatingNoteIndex][type] = value;
    this.setState({
      selectedNoteId: id,
      notes,
    })
  }

  render() {
    const { selectedNoteId } = this.state;
    const { notes } = this.state;
    const noteToDisplay = notes.find(note => note.id === selectedNoteId);
    return (
      <div className="row">
        <div className="col-sm-4">
          <NoteList list = {notes} onClick={this.handleOnClick}/>
        </div>
        <div className="col-sm-8">
          <Menu onAddNewNote={this.handleAddNewNote}/>
          {noteToDisplay && <Note note={noteToDisplay} onUpdateNote={this.onUpdateNote}/>}
        </div>
      </div>
    );
  }
}