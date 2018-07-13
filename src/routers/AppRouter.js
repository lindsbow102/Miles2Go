import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import TrainingCalendar from '../components/TrainingCalendar';
import RaceWeek from '../components/RaceWeek';
import Week2 from '../components/Week2';
import Week3 from '../components/Week3';
import Week4 from '../components/Week4';
import Week5 from '../components/Week5';
import Week6 from '../components/Week6';
import Week7 from '../components/Week7';
import Week8 from '../components/Week8';
import Week9 from '../components/Week9';
import Week10 from '../components/Week10';
import Week11 from '../components/Week11';
import Week12 from '../components/Week12';
import Week13 from '../components/Week13';
import Week14 from '../components/Week14';
import Week15 from '../components/Week15';
import Week16 from '../components/Week16';
import WelcomePage from '../components/WelcomePage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={WelcomePage} exact={true} />
        <Route path="/calendar" component={TrainingCalendar} exact={true} />
        <Route path="/RaceWeek" component={RaceWeek} />
        <Route path="/week2" component={Week2} />
        <Route path="/week3" component={Week3} />
        <Route path="/week4" component={Week4} />
        <Route path="/week5" component={Week5} />
        <Route path="/week6" component={Week6} />
        <Route path="/week7" component={Week7} />
        <Route path="/week8" component={Week8} />
        <Route path="/week9" component={Week9} />
        <Route path="/week10" component={Week10} />
        <Route path="/week11" component={Week11} />
        <Route path="/week12" component={Week12} />
        <Route path="/week13" component={Week13} />
        <Route path="/week14" component={Week14} />
        <Route path="/week15" component={Week15} />
        <Route path="/week16" component={Week16} />        
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;