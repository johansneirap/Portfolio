import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
  return (
    <Router basename="Portfolio">
      <div>
        <Navbar />
        <Switch>
          {/* <Route exact path="" component= {A}></Route> */}
        </Switch>
      </div>
    </Router>
  );
};
