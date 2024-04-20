/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  // create a count variable to keep track of the number of times a character appears
  let count = 1
  // create an iterate variable to keep track of the index of the character array
  let iterate = 0

  // iterate through the character array
  for (let i = 0; i < chars.length; i++) { 
      // if the current character is the same as the next character, increment the count
      if (chars[i] === chars[i + 1]) { 
          count++
      }
      // if the current character is not the same as the next character
      // if the count is 1, add the character to the array
      else if (count === 1) { 
          chars[iterate++] = chars[i]
      }
      // if the count is less than 10, add the character and the count to the array
      else if (count < 10) { 
          chars[iterate++] = chars[i]
          chars[iterate++] = count.toString()
          count = 1
      }
      // if the count is greater than 10, add the character and the count to the array
      // BUT first convert the count to a string and add each digit to the array
      else { 
          const s = count.toString().split('')
          chars[iterate++] = chars[i]
          for (let j = 0; j < s.length; j++) { 
              chars[iterate++] = s[j]
          }
          count = 1
      }
  }
  console.log(chars.slice(0, iterate))
  return iterate 
};

// Test cases
compress(["a","a","b","b","c","c","c"])
// Output: ["a","2","b","2","c","3"]

compress(["a"])
// Output: ["a"]

compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"])
// Output: ["a","b","1","2"]