import moment from 'moment';

const startTraining = moment().subtract(16, 'weeks');
console.log(startTraining.format('MMM Do'));

const hours = moment.duration("hours");
const minutes = moment.duration("minutes");
const seconds = moment.duration("seconds");
const myTime = {
  hours: 3,
  minutes: 10,
  seconds: 29
};
console.log(moment(myTime).format("H:mm:ss"));
const raceTime = moment(myTime).format("H:mm:ss");
console.log(raceTime);
const raceTimeMinutes = moment.duration(raceTime).asMinutes();
console.log(raceTimeMinutes);
const racePace = raceTimeMinutes / 26.2; // later will be raceTimeMinutes / {raceDistance}
console.log(racePace);
const formattedRacePace = moment.duration(racePace, 'minutes');
console.log(formattedRacePace._data.minutes);
console.log(formattedRacePace._data.seconds);