/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // the left pointer is used to keep track of the position of the last non-zero number
  let left = 0;
  for(let i=0; i<nums.length; i++){
      // if the current number is not 0
      if(nums[i] !== 0){
          // swap the left pointer with the current number
          [nums[left], nums[i]] = [nums[i], nums[left]] 
          // increment the left pointer
          left++;
      }
  }
  console.log(nums)
};

moveZeroes([0,1,0,3,12])
// Output: [1,3,12,0,0]

moveZeroes([0])
// Output: [0]