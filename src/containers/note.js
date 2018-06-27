import { connect } from 'react-redux';
import { updateNote, updateNoteCategory } from '../actions/action';
import Note from '../components/note';

const noteToDisplay = (notes, selectedNoteId) => {
  const list = [...notes];
  const a = (list || []).filter(note => note.id === selectedNoteId);
  return a[0];
};

const mapStateToProps = (state) => {
  const note = (state.notes || []).find(item => item.id === state.selectedNoteId);
  return {
    note,
    categories: [...state.categories],
    // tags: [...note.tags],
  };
};

const mapDispatchToProps = dispatch => ({
  onUpdateNote: (value, selectedNoteId, type) => dispatch(updateNote(value, selectedNoteId, type)),
  handleChangeCategory: (newValue, actionMeta, id) => dispatch(updateNoteCategory(newValue, actionMeta, id)),
});

// const NoteContainer = connect(mapStateToProps, mapDispatchToProps)(Note);

export default connect(mapStateToProps, mapDispatchToProps)(Note);
