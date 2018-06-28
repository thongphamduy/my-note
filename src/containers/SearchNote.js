import { connect } from 'react-redux';
import { searchNote } from '../actions/action';
import SearchNote from '../components/search-note';

const mapStateToProps = state => ({
  searchText: state.searchText,
});

const mapDispatchToProps = dispatch => ({
  handleTyping: e => dispatch(searchNote(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchNote);
