import React from 'react';
import { Link } from 'react-router-dom';

export const WelcomePage = () => (
    <div>
        <h1>This is the welcome page</h1>   
        <Link to='/calendar'>
            <button>Generate Training Plan</button> 
        </Link>    
    </div>
);

export default WelcomePage;