import React from 'react';
import { Link } from 'react-router-dom';

export const Week8 = () => (
    <div>
        <h1>Week starting on {}</h1>
        <h3>Track Repeats: 2 x 1600 @ {}, 2 x 800 @ {} -- RI: 60 sec</h3>
        <h3>Tempo Run: 1 mile easy, 4 miles @ {} per mile, 1 mile easy</h3>
        <h3>Long Run: 20 miles @ {} per mile</h3>
        <button>Return to Training Calendar</button>
    </div>
);