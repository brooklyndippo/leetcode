/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let maxAltitude = 0;
  let currentAltitude = 0;

  for (let i = 0; i < gain.length; i++) {
    // add the current gain to the current altitude
    // if the gain is negative, the current altitude will decrease
    currentAltitude += gain[i];
    if (currentAltitude > maxAltitude) {
      // if the current altitude is greater than the max altitude, update the max altitude
      maxAltitude = currentAltitude;
    }
  }

  console.log(maxAltitude)
  return maxAltitude;
};

largestAltitude([-5,1,5,0,-7])
// Output: 1

largestAltitude([-4,-3,-2,-1,4,3,2])
// Output: 0