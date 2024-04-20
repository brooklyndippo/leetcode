/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var mergeAlternately = function(word1, word2) {
  let output = '';

  // find the longer word to determine the number of iterations
  let longerWord = Math.max(word1.length, word2.length);

  for (let i=0; i < longerWord; i++) {
      // in each iteration, add a character from word1 and word2 to the output
      // if the character does not exist (shorter word), add an empty string
      output += (word1[i] || '') + (word2[i] || '');
  }
  return output;
};

mergeAlternately("abc", "pqr")
// Output: "apbqcr"

mergeAlternately("ab", "pqrs")
// Output: "apbqrs"

mergeAlternately("abcd", "pq")
// Output: "apbqcd"