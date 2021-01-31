import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import ReactGa from 'react-ga';

export const Layout = () => {
  useEffect(() => {
    ReactGa.initialize('UA-164581428-1');

    ReactGa.pageview(window.location.pathname);
  }, []);

  return (
    <Router>
      <Fragment>
        <Switch>
          {/* <Route
  path='/description_pg/:id'
  render={(props) => <DescriptionPG {...props} isAuthed={true} />}
/> */}
          <Route exact path='/' component={App}></Route>
        </Switch>
      </Fragment>
    </Router>
  );
};
