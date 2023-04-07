const { NotImplementedError } = require('../extensions/index.js');


function calculateHanoi(disks, turnsPerHour) {
  const turns = Math.pow(2, disks) - 1;
  const turnsPerSecond = turnsPerHour / 3600;
  const time = Math.floor(turns / turnsPerSecond);

  return {turns , seconds: time};
}

module.exports = {
  calculateHanoi
};

