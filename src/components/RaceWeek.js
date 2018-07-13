import React from "react";
import { Link } from "react-router-dom";

const RaceWeek = () => (
  <div>
    <h3>Track Repeats: 6 x 400 @ {} -- RI: 400 m</h3>
    <h3>Tempo: 3 miles @ {} per mile</h3>
    <h3>Race Day! 26.2 miles @ {} per mile</h3>
    <Link to="/calendar">
      <button>Return to Training Calendar</button>
    </Link>
  </div>
);

export default RaceWeek;
