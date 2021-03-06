import PropTypes from 'prop-types';
import React from 'react';

const SearchNote = ({ searchText, handleTyping }) => (
  <div>
    <form className="form-group">
      <input className="form-control" type="text" placeholder="search..." value={searchText} onChange={handleTyping} />
    </form>
  </div>
);

SearchNote.propTypes = {
  handleTyping: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchNote;
