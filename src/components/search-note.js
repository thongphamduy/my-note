import PropTypes from 'prop-types';

const SearchNote = ({ searchText, handleTyping }) => (
  <form>
    <input type="text" placeholder="search..." value={searchText} onChange={handleTyping} />
  </form>
);

SearchNote.propTypes = {
  handleTyping: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchNote;
