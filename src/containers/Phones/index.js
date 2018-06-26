import React, {Component} from 'react';
import * as R from 'ramda';

import Layout from '../Layout';
import {connect} from 'react-redux';
import {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  fetchCategories
} from '../../actions';
import {Link} from 'react-router-dom';

import {getPhones} from '../../selectors';

class Phones extends Component {
  componentDidMount() {
    this.props.fetchPhones();
    this.props.fetchCategories();
  }
  renderPhone({id,image,name,price,description},index) {
    const shortDescription = `${R.take(60,description)}...`;
    return (
      <div key={index} className="col-md-4">
        <img className="card-img-top" src={image} alt={name}/>
        <div className="card-body flex-column">
          <h4>
            <Link to={`/phones/${id}`}>{name}</Link>
          </h4>
          <h4>$ {price}</h4>
          <p>{shortDescription}</p>
          <p className="mt-auto">
            <button onClick={() => this.props.addPhoneToBasket(id)} className="btn btn-primary btn-block">Buy now</button>
            <Link to={`/phones/${id}`} className="btn btn-outline-secondary btn-block">More info</Link>
          </p>
        </div>
      </div>
    )
  }
  render() {
    const {phones} = this.props;
    return (
      <Layout>
        <div className="card-group row">
          {phones.map((phone,index) => this.renderPhone(phone,index))}
        </div>
        <div className="row flex-row-reverse">
          <button
            className="btn btn-outline-primary"
            onClick={this.props.loadMorePhones}
          >
            Load more
          </button>
        </div>
      </Layout>
    )
  }
};

const mapStateToProps = (state,ownProps) => ({
  phones: getPhones(state,ownProps.match)
});

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  fetchCategories
};

export default connect(mapStateToProps,mapDispatchToProps)(Phones);