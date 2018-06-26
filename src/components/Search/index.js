import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchPhones} from '../../actions';

class Search extends Component {
  state = {
    value: ''
  };
  handleChange = e => {
    this.props.searchPhones(e.target.value);
  };
  render() {
    return (
      <div>
        <h4 className="card-title">Search</h4>
        <form className="input-group">
          <input
            type="text"
            onChange={this.handleChange}
            className="form-control"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchPhones
};

export default connect(null,mapDispatchToProps)(Search);