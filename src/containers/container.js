import React from 'react';
import Menu from '../components/menu';
import NoteList from '../components/note-list';
import Note from '../components/note';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {selectedNoteId: null};
  }

  handleOnClick(id) {
    this.setState({selectedNoteId: id});
  }

  render() {
    const selectedNoteId = this.state.selectedNoteId;
    let noteToDisplay = {};
    for (let note of this.props.data) {
      if (note.id === selectedNoteId) {
        noteToDisplay = note;
      }
    }
    return (
      <div className="row">
        <div className="col-sm-4">
          <NoteList list = {this.props.data} onClick={this.handleOnClick}/>
        </div>
        <div className="col-sm-8">
          <Menu/>
          <Note note = {noteToDisplay}/>
        </div>
      </div>
    );
  }
}