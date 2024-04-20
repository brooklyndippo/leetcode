/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  // 
  let ls = s.length
  const original = t;
  const lo = t.length

  // if the length of subsequence is greater than original string return false
  if(ls > lo) { 
    console.log(false)
    return false
  }
  // if the length of subsequence is 0 return true
  if(!ls) {
    console.log(true)
    return true
  }
  // iterate through the original string
  for(let i = 0, slength = s.length; i < lo; i++) {
      // if the character matches the current character in the subsequence, decrement the subsequence length
      if(original[i] === s[slength - ls]) {
        ls--
      }
      // if the subsequence length is 0, return true
      if(!ls) {
        console.log(true)
        return true
      } 
  }
  // if the subsequence length is not 0 by the end, return false
  console.log(false)
  return false
};

isSubsequence("abc", "ahbgdc")
// Output: true

isSubsequence("axc", "ahbgdc")
// Output: false

isSubsequence("abcde", "abcd")
// Output: false