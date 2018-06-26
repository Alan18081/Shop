import * as R from 'ramda';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Cart from '../../components/CartLink';
import {fetchPhoneById,addPhoneToBasket} from '../../actions';
import {getPhoneById} from '../../selectors';

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById(this.props.match.params.id);
  }
  renderFields() {
    const {phone} = this.props;
    const columnFields = R.compose(
      R.toPairs,
      R.pick([
        'cpu',
        'camera',
        'size',
        'weight',
        'display',
        'battery',
        'memory'
      ])
    )(phone);
    return columnFields.map(([key,value]) => (
      <div key={key}>
        <div className="list-group-item flex-row align-items-center justify-content-between">
          <h4 className="float-left text-capitalize">{key}</h4>
          <p>{value}</p>
        </div>
      </div>
    ));
  }
  renderContent() {
    const {image,name,price,description} = this.props.phone;
    return (
      <div className="card">
        <div className="view-container">
          <div className="row">
            <div className="col-md-6">
              <img className="img-thumbnail" src={image} alt={name}/>
            </div>
            <div className="col-md-6">
              Our fields
              {this.renderFields()}
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <h4>{name}</h4>
              <p>{description}</p>
            </div>
            <div className="col-md-4">
              <h4>{price}</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
  renderSidebar() {
    const {phone,addPhoneToBasket} = this.props;
    return (
      <div>
        <p>Quick shop</p>
        <Cart/>
        <div className="form-group">
          <h2>{phone.name}</h2>
          <h3>${phone.price}</h3>
        </div>
        <button
          type="button"
          onClick={() => addPhoneToBasket(phone.id)}
          className="btn btn-success btn-block"
        >Add to cart</button>
        <Link to="/" className="btn btn-info btn-block">Back to store</Link>
      </div>
    );
  }
  render() {
    return (
      <div className="view-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {this.props.phone && this.renderContent()}
            </div>
            <div className="col-md-3">
              {this.props.phone && this.renderSidebar()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  phone: getPhoneById(state,state.phonePage.id)
});

const mapDispatchToProps = {
  fetchPhoneById,
  addPhoneToBasket
};

export default connect(mapStateToProps,mapDispatchToProps)(Phone);