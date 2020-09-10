import React, { Fragment } from 'react';
import ResizeDetector from 'react-resize-detector';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Dashboard from './app/component/dashboard';
import ScrollToTop from './app/component/dashboard/comp/scroll-to-top';
import Cart from './app/component/cart';
import Toner from './app/component/page/toner';
import WorkList from './app/component/search';
import Lotion from './app/component/page/lotion';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
        <ResizeDetector
          handleWidth
          render={({ width }) => (
            <Fragment>
              <Switch>
              <Route path="/dashboard" component={Dashboard} exact />
              <Route path="/cart" component={Cart} exact />
              <Route path="/product/toner" component={Toner} exact />
              <Route path="/product/lotion" component={Lotion} exact />
              <Route path="/search/{word}" component={WorkList}  />
              <Route
                exact
                path="/"
                render={() => <Redirect to="/dashboard" />}
              />
              {/* <Route path="/about" component={} /> */}
              {/* <Route path="/shop" component={} /> */}
          </Switch>
            </Fragment>
          )}
        />
          </ScrollToTop>
        </Router>
    </div>
  );
}

export default App;
