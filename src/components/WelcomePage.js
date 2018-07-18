import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";

class WelcomePage extends React.Component {
  state = {
    calendarFocused: null,
    date: undefined,
    goalRaceDate: undefined,
    raceDistance: '5k',
    raceTime: {
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    }
  };
  render() {
    return (
      <div>
        <h1>Please enter a recent race time!</h1>
        <h4>Race Distance:</h4>
        <select>
          <option value="5k">5k</option>
          <option value="10k">10k</option>
          <option value="half-marathon">Half Marathon</option>
          <option value="marathon">Marathon</option>
        </select>
        <h4>Finishing Time:</h4>
        <input 
            type="number" 
            placeholder="hours" 
            value={this.state.hours} 
        />
        <input 
            type="number" 
            placeholder="minutes" 
            value={this.state.minutes} 
        />
        <input 
            type="number" 
            placeholder="seconds" 
            value={this.state.seconds} 
        />
        <h3>Select a date for your goal marathon!</h3>
        <SingleDatePicker
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
          focused={this.state.calendarFocused} // PropTypes.bool
          onFocusChange={({ calendarFocused }) =>
            this.setState({ calendarFocused })
          } // PropTypes.func.isRequired
          numberOfMonths={2}
          isOutsideRange={() => false}
          id="your_unique_id" // PropTypes.string.isRequired,
        />
        <Link to="/calendar">
          <button>Generate Training Plan</button>
        </Link>
      </div>
    );
  }
}

export default WelcomePage;
