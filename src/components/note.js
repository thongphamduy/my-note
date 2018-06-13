import React from 'react';
import PropTypes from 'prop-types';
import './note.css';

class Note extends React.Component {
  static propTypes = {
    note: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
    onUpdateNote: PropTypes.func.isRequired,
  }

  handleOnchangeNote = (e, type) => {
    this.props.onUpdateNote(e.target.value, this.props.note.id, type);
  }

  render() {
    const { note } = this.props;
    return (
      <div className="d-flex flex-column flex-grow">
        <form className="form-group">
          <input className="form-control font-weight-bold" type="text" value={note.title} onChange={e => this.handleOnchangeNote(e, 'title')}/>
        </form>
        <hr className="note-line"/>
        <form className="form-group flex-grow d-flex flex-column">
          <textarea className="form-control flex-grow" value={note.content} onChange={e => this.handleOnchangeNote(e, 'content')}/>
        </form>
      </div>
    );
  }
}

export default Note;
