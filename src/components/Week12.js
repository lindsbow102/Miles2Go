import React from "react";
import { Link } from "react-router-dom";

const Week12 = () => (
  <div>
    <h1>Week starting on {}</h1>
    <h3>Track Repeats: 3 x 1600 @ {} -- RI: 400 m</h3>
    <h3>Tempo Run: 2 miles easy, 3 miles @ {} per mile, 1 mile easy</h3>
    <h3>Long Run: 18 miles @ {} per mile</h3>
    <Link to="/calendar">
      <button>Return to Training Calendar</button>
    </Link>
  </div>
);

export default Week12;
