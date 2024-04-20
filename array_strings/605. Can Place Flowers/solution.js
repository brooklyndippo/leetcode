/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

  // check how many potential spaces there are in a flowerbed
  // in an odd number of spaces, you can plant edges and middle space so you round up ex: 5 spaces = 3 plantable 10101
  // in an even number of spaces, you can only plant on one edge ex: 101010
  let potentialSpaces = Math.ceil(flowerbed.length/2)

  // calculate the number of spaces that are already planted
  let plantedSpaces = flowerbed.reduce((acc, curr) => { return acc + curr }, 0)

  // calculate the number of plantable spaces remaining
  let plantableSpaces =  potentialSpaces - plantedSpaces

  // check if the number of plantable spaces is greater than or equal to the number of flowers to plant
  console.log( plantableSpaces >= n)
  return plantableSpaces >= n
};

canPlaceFlowers([1,0,0,0,1], 1)
// Output: true

canPlaceFlowers([1,0,0,0,1], 2)
// Output: false