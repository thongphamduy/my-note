import React from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
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
    const {
      note, categories, handleChange, tags,
    } = this.props;
    return (
      <div className="d-flex flex-column flex-grow">
        <form className="form-group">
          <input placeholder="your title here" className="form-control font-weight-bold" type="text" value={note.title} onChange={e => this.handleOnchangeNote(e, 'title')}/>
        </form>
        <hr className="note-line"/>
        <form className="form-group flex-grow d-flex flex-column">
          <textarea placeholder="your body here" className="form-control flex-grow" value={note.content} onChange={e => this.handleOnchangeNote(e, 'content')}/>
        </form>
        <CreatableSelect
          key={note.id}
          isMulti
          onChange={handleChange}
          options={categories}
          defaultValue={tags}
          placeholder="Select category"/>
      </div>
    );
  }
}

export default Note;
