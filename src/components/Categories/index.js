import React from 'react';
import * as R from 'ramda';
import {connect} from 'react-redux';
import {Link,withRouter} from 'react-router-dom';
import {compose} from 'redux';

import {
  getCategories,
  getActiveCategoryId
} from '../../selectors';

const categories = ({categories,match}) => {
  const activeCategoryId = getActiveCategoryId(match);
  const getActiveState = category => category.id === activeCategoryId;
  const renderCategory = (category,index) => {
    const active = getActiveState(category);
    const linkClasses = [
      'list-group-item',
      active ? 'active' : ''
    ];
    return (
      <Link
        to={`/categories/${category.id}`}
        className={linkClasses.join(' ')}
        key={index}
      >
        {category.name}
      </Link>
    );
  };
  const renderAllCategory = () => {
    const linkClasses = [
      'list-group-item',
      R.isNil(activeCategoryId) ? 'active' : ''
    ];
    return (
      <Link to="/" className={linkClasses.join(' ')}>
        All
      </Link>
    )
  };
  return (
    <div>
      <h4>Brand</h4>
      <div className="list-group">
        {renderAllCategory()}
        {categories.map((category,index) => renderCategory(category,index))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  categories: getCategories(state)
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(categories);