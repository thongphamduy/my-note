import { connect } from 'react-redux';
import { addNewNote, deleteNote } from '../actions/action';
import Menu from '../components/menu';

const mapStateToProps = state => ({
  selectedNoteId: state.selectedNoteId,
});
const mapDispatchToProps = dispatch => ({
  onAddNewNote: () => dispatch(addNewNote()),
  onDeleteNote: id => dispatch(deleteNote(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
