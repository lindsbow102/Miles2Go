import React from "react";
import { Link } from 'react-router-dom';

const Week5 = () => (
  <div>
    <h1>Week starting on {}</h1>
    <h3>Track Repeats: 3 x 1600 @ {} -- RI: 400 m</h3>
    <h3>Tempo Run: 10 miles @ {} per mile</h3>
    <h3>Long Run: 15 miles @ {} per mile</h3>
    <Link to="/calendar">
      <button>Return to Training Calendar</button>
    </Link>
  </div>
);

export default Week5;
