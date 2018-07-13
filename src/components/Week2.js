import React from "react";
import { Link } from 'react-router-dom';

const Week2 = () => (
  <div>
    <h1>Week starting on {}</h1>
    <h3>Track Repeats: 5 x 1000 @ {} -- RI: 400 m</h3>
    <h3>Tempo Run: 2 miles easy, 3 miles @ {} per mile, 1 mile easy</h3>
    <h3>Long Run: 10 miles @ {} per mile</h3>
    <Link to="/calendar">
      <button>Return to Training Calendar</button>
    </Link>
  </div>
);

export default Week2;
