/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  // calculate the total sum of the array so we can determine the right sum
  let totalSum = nums.reduce((acc, curr) => { return acc + curr }, 0)
  
  // initialize the left sum to 0
  let leftSum = 0
  
  // iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // check if the left sum is equal to the total sum minus the left sum and the current element (the right sum)
    if (leftSum === totalSum - leftSum - nums[i]) {
      // if it is, we found the pivot and can return it
      console.log(i)
      return i
    }
    // otherwise, continue by adding the current element to the left sum
    leftSum += nums[i]
  }
  // if no pivot index is found, return -1
  console.log(-1)
  return -1
};

pivotIndex([1, 7, 3, 6, 5, 6])
// Output: 3

pivotIndex([1, 2, 3])
// Output: -1

pivotIndex([2, 1, -1])
// Output: 0