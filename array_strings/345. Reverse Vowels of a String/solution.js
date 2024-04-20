/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  // define the beginning and end of the word as our left and right points
  let left = 0
  let right = s.length - 1

  // split the string into an array
  let arr = s.split("")

  // define the vowels
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', "I", 'O', 'U']
  
  // until the two points meet, we run this loop
  while(left < right){
      // the indexOf method return -1 if not present in an array
      // we are checking to find when both of our points (left and right) are vowels
      if(vowels.indexOf(arr[left]) !== -1 && vowels.indexOf(arr[right]) !== -1)
          {
              // when they are both vowels, we swap them
              [arr[left], arr[right]] = [arr[right], arr[left]]
              ++left;
              --right;
          }
      // if the left side is NOT a vowel, we keep incrementing until it is
      if(vowels.indexOf(arr[left]) == -1){
          ++left
      }
      // if the right side is NOT a vowel, we keep decrementing until it is
      if(vowels.indexOf(arr[right]) == -1){
          --right
      }
  }

  console.log(arr.join(""))
  return arr.join("")
};

reverseVowels("hello")
// Output: "holle"

reverseVowels("leetcode")
// Output: "leotcede"