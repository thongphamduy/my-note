import { connect } from 'react-redux';
import { selectNote } from '../actions/action';
import NoteList from '../components/note-list';

const getVisibleNotes = (notes, filterCategory, searchText) => notes.filter(note =>
  note.title.indexOf(searchText) > -1 || note.content.indexOf(searchText) > -1).filter(note =>
  !filterCategory || note.tags.filter(tag => tag.value === filterCategory).length);

const mapStateToProps = state => ({
  list: getVisibleNotes(state.notes, state.filterCategory, state.searchText),
  activeNote: state.selectedNoteId,
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(selectNote(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
