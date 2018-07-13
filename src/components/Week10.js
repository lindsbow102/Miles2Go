import React from "react";
import { Link } from "react-router-dom";

const Week10 = () => (
  <div>
    <h1>Week starting on {}</h1>
    <h3>
      Track Repeats: 6 x 800 @ {}, 2 x 800 @ {} -- RI: 90 sec
    </h3>
    <h3>Tempo Run: 1 mile easy, 6 miles @ {} per mile, 1 mile easy</h3>
    <h3>Long Run: 13 miles @ {} per mile</h3>
    <Link to="/calendar">
      <button>Return to Training Calendar</button>
    </Link>
  </div>
);

export default Week10;
