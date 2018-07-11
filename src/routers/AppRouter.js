import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import TrainingCalendar from '../components/TrainingCalendar';
import WelcomePage from '../components/WelcomePage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={WelcomePage} exact={true} />
        <Route path="/calendar" component={TrainingCalendar} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;