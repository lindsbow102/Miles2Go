import React from "react";
import { Link } from 'react-router-dom';

const Week6 = () => (
  <div>
    <h1>Week starting on {}</h1>
    <h3>
      Track Repeats: 1000 @ {}, 2000 @ {}, 1000 @ {}, 1000 @ {} -- RI: 400 m
    </h3>
    <h3>Tempo Run: 1 mile easy, 5 miles @ {} per mile, 1 mile easy</h3>
    <h3>Long Run: 20 miles @ {} per mile</h3>
    <Link to="/calendar">
      <button>Return to Training Calendar</button>
    </Link>
  </div>
);

export default Week6;
