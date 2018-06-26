import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import Phones from './containers/Phones';
import Phone from './containers/Phone';
import Cart from './containers/Cart';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer,composeWithDevTools(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Phones}/>
        <Route path="/phones/:id" component={Phone}/>
        <Route path="/categories/:id" component={Phones}/>
        <Route path="/basket" component={Cart}/>
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
