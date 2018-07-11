import React from "react";
import { Link } from "react-router-dom";

export const TrainingCalendar = () => (
  <div>
    <Link to='/week16' component={Week16}>
      <button>Week 16: {}</button>
    </Link>
    <Link to='/week15' component={Week15}>
      <button>Week 15: {}</button>
    </Link>
    <Link to='/week14' component={Week14}>
      <button>Week 14: {}</button>
    </Link>
    <Link to='/week13' component={Week13}>
      <button>Week 13: {}</button>
    </Link>
    <Link to='/week12' component={Week12}>
      <button>Week 12: {}</button>
    </Link>
    <Link to='/week11' component={Week11}>
      <button>Week 11: {}</button>
    </Link>
    <Link to='/week10' component={Week10}>
      <button>Week 10: {}</button>
    </Link>
    <Link to='/week9' component={Week9}>
      <button>Week 9: {}</button>
    </Link>
    <Link to='/week8' component={Week8}>
      <button>Week 8: {}</button>
    </Link>
    <Link to='/week7' component={Week7}>
      <button>Week 7: {}</button>
    </Link>
    <Link to='/week6' component={Week6}>
      <button>Week 6: {}</button>
    </Link>
    <Link to='/week5' component={Week5}>
      <button>Week 5: {}</button>
    </Link>
    <Link to='/week4' component={Week4}>
      <button>Week 4: {}</button>
    </Link>
    <Link to='/week3' component={Week3}>
      <button>Week 3: {}</button>
    </Link>
    <Link to='/week2' component={Week2}>
      <button>Week 2: {}</button>
    </Link>
    <Link to='/raceweek' component={RaceWeek}>
      <button>Race Week! {}</button>
    </Link>
  </div>
);
