const getCurrentUTCWithValidation = () => {
  const currentUTC = new Date().toISOString();
  const serverTime = new Date(currentUTC).getTime();
  const currentTime = Date.now();

  //Max difference is 2 minutes
  const maxDifference = 2 * 60 * 1000;

  // Calculate the time difference between server time and current time
  const timeDifference = Math.abs(serverTime - currentTime);

  // Check if the time difference is within the acceptable range
  if (timeDifference <= maxDifference) {
    return currentUTC;
  } else {
    return 'Time validation failed';
  }
};

const getCurrentWeekDay = () => {
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekdays[d.getDay()];

return day
}

module.exports = { getCurrentUTCWithValidation, getCurrentWeekDay }