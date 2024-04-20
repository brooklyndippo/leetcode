/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function(str1, str2) {
    
  // first, check to make sure that they are divisible at all by make sure they have a repeating pattern
  // this would fail in the case you had something like ABABAB + ABCABC because ABABABABCABC !== ABCABCABABAB
  if (str1 + str2 !== str2 + str1) {
      return "";
  }

  // get the shortest word
  let shorterWord = Math.min(str1.length, str2.length);

  // example str1 = ABCABC str2 = ABCABCABCABC
  // start with the full shortest word (ex: ABCABC)
  // if we started from the first letter and work UP we would get "ABC" as the answer when it is actually "ABCABC", so this is why we increment down
  for (let i = shorterWord; i > 0; i--) {
      // check if the remainder is 0 when you divide both words by the pattern
      if ((str1.length % i === 0) && (str2.length % i === 0)) {
          // when both words are divisible by the entire pattern with no remainder, that is the greatest commond denominator
          return str1.substring(0, i);
      }
  }
};


gcdOfStrings("ABCABC", "ABC")
// Output: "ABC"

gcdOfStrings("ABABAB", "AB")
// Output: "AB"

gcdOfStrings("LEET", "CODE")
// Output: ""