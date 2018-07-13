import React from "react";
import { Link } from 'react-router-dom';

const Week4 = () => (
  <div>
    <h1>Week starting on {}</h1>
    <h3>Track Repeats: 10 x 400 @ {} -- RI: 400 m</h3>
    <h3>Tempo Run: 8 miles @ {} per mile</h3>
    <h3>Long Run: 20 miles @ {} per mile</h3>
    <Link to="/calendar">
      <button>Return to Training Calendar</button>
    </Link>
  </div>
);

export default Week4;
