/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  // javascript maps hold key-value pairs
  const map = new Map();

  for (const val of arr) {
    // if the value is already in the map, increment the value
    // if the value is not in the map, set the value to 1
    map.set(val, (map.get(val) || 0) + 1);
  }

  // create a set from the values of the map
  // a set is a collection of unique values, so if the map has duplicate values, the set will not
  const set = new Set(map.values());

  // if the size of the map is equal to the size of the set, return true
  return map.size === set.size;
};

uniqueOccurrences([1,2,2,1,1,3])
// Output: true

uniqueOccurrences([1,2])
// Output: false

uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])
// Output: true