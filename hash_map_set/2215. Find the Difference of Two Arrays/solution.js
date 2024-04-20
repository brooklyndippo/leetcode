/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {

  // create a set for each array
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  
  // remove the elements of the first array from the second set and vice versa
  // this leaves us with the elements that are unique to each array

  // for each number in the first array, if it is in the second set we delete it from the second set
  // we do the same for the second array and the first set
  nums1.forEach(set2.delete, set2);
  nums2.forEach(set1.delete, set1);
  
  return [[...set1], [...set2]]
};

findDifference([1,2,3,4,5], [1,2,3,4,5,6])
// Output: [5,6]

findDifference([1,2,3,4,5], [1,2,3,4,5])
// Output: []