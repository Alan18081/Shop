import React from 'react';
import * as R from 'ramda';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  getTotalBasketPrice,
  getBasketPhonesWithCount
} from '../../selectors';

import {
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket
} from '../../actions';

const cart = ({phones,totalPrice,removePhoneFromBasket,basketCheckout,cleanBasket}) => {
  const isBasketEmpty = R.isEmpty(phones);
  const renderContent = () => {
    return (
      <div>
        {isBasketEmpty && <div>Your basket is empty</div>}
        <div>
          <table className="table-bordered table-responsive">
            <tbody>
              {phones.map((phone,index) => (
                <tr key={index}>
                  <td>
                    <img className="img-thumbnail" src={phone.image} alt={phone.name}/>
                  </td>
                  <td>
                    {phone.name}
                  </td>
                  <td>
                    {phone.price}
                  </td>
                  <td>
                    {phone.count}
                  </td>
                  <td>
                    <i onClick={() => removePhoneFromBasket(phone.id)} className="fa fa-trash"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {
          R.not(isBasketEmpty) &&
          <div className="row">
            <div className="col-md-12">
              <h3>Total price</h3>
              <p>${totalPrice}</p>
            </div>
          </div>
        }
      </div>
    )
  };
  const renderSidebar = () => (
    <div>
      <Link to="/" className="btn btn-info btn-block">
        <i className="fa fa-shopping-bag"></i>
        <span>Continue shopping</span>
      </Link>
      {R.not(isBasketEmpty) &&
        <div>
          <button onClick={cleanBasket} className="btn btn-outline-danger btn-block">
            <i className="fa fa-trash"></i>
            <span>Clean cart</span>
          </button>
          <button className="btn btn-success btn-block" onClick={() => basketCheckout(phones)}>
            <i className="fa fa-envelope"></i>
            <span>Checkout</span>
          </button>
        </div>
      }
    </div>
  );
  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            {renderContent()}
          </div>
          <div className="col-md-3">
            {renderSidebar()}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  totalPrice: getTotalBasketPrice(state),
  phones: getBasketPhonesWithCount(state)
});

const mapDispatchToProps = {
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket
};

export default connect(mapStateToProps,mapDispatchToProps)(cart);