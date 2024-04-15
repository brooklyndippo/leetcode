/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */


var mergeAlternately = function(word1, word2) {
  let output = '';
  let longerWord = Math.max(word1.length, word2.length);

  for (let i=0; i < longerWord; i++) {
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