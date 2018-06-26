import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getTotalBasketCount,getTotalBasketPrice} from '../../selectors';

const cartLink = ({totalBasketCount,totalBasketPrice}) => (
  <div className="cart">
    <div className="dropdown">
      <Link to="/basket" className="btn btn-outline-primary btn-block">
        <i className="fa fa-shopping-cart" style={{marginRight: '10px'}}></i>
        <span>{totalBasketCount} item(s) - ${totalBasketPrice}</span>
      </Link>
    </div>
  </div>
);

const mapStateToProps = state => ({
  totalBasketCount: getTotalBasketCount(state),
  totalBasketPrice: getTotalBasketPrice(state)
});

export default connect(mapStateToProps)(cartLink);