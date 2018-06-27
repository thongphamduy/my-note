import { connect } from 'react-redux';
import SelectCategory from '../components/Select';
import { filterCategory } from '../actions/action';

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  handleFilterChange: newValue => dispatch(filterCategory(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategory);
