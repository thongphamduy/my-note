import React from 'react';
import PropTypes from 'prop-types';

class SearchNote extends React.Component {
  static propTypes = {
    onHandleTyping: PropTypes.func.isRequired
  };

  state = {
    searchText: ""
  };

  handleTyping = (e) => {
    const searchText = e.target.value;
    this.setState({ searchText })
    this.props.onHandleTyping(searchText);
  }

  render() {
    return(
      <form>
        <input type="text" placeholder="search..." value={this.state.searchText} onChange={this.handleTyping}/>
      </form>
    );
  }
}

export default SearchNote;
