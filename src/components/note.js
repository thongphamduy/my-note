import React from 'react';
import PropTypes from 'prop-types';

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
      <form className="form-group">
        <input className="form-control" type="text" value={note.title} onChange={e => this.handleOnchangeNote(e, 'title')}/>
        <textarea className="form-control" value={note.content} onChange={e => this.handleOnchangeNote(e, 'content')}/>
      </form>
    );
  }
}

export default Note;
