import React from "react";
import { Link } from "react-router-dom";

const Week14 = () => (
  <div>
    <h1>Week starting on {}</h1>
    <h3>
      Track Repeats: 1200 @ {}, 1000 @ {}, 800 @ {}, 600 @ {}, 400 @ {} -- RI:
      200 m
    </h3>
    <h3>Tempo Run: 1 mile easy, 5 miles @ {} per mile, 1 mile easy</h3>
    <h3>Long Run: 17 miles @ {} per mile</h3>
    <Link to="/calendar">
      <button>Return to Training Calendar</button>
    </Link>
  </div>
);

export default Week14;
