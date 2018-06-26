import React from 'react';

import './index.css';

import Sidebar from '../../components/Sidebar';

const layout = ({children}) => (
  <div className="Layout">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Sidebar/>
        </div>
        <div className="col-md-8">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default layout;