/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let productSolutions = []

  for (let i=0; i < nums.length; i++) {
    // create a new array with the current index removed
    let arrMinusSelf = nums.filter((num, index) => index !== i)
    // reduce the array with a multiplication function to get the product without self
    let product = arrMinusSelf.reduce((acc, curr) => { return Math.imul(acc, curr) })
    productSolutions.push(product)
  }
  console.log(productSolutions)
  return productSolutions
};

productExceptSelf([1,2,3,4])
// Output: [24,12,8,6]

productExceptSelf([-1,1,0,-3,3])
// Output: [0,0,9,0,0]