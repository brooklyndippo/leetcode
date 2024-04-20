/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let reverseSentence = [];

  let sentence = s.split("");
  let word = "";

  let char = 0;
  while (char <= sentence.length) {
      // handle adding the last word
      if (char === sentence.length && word.length > 0) {
        // add it to the beginning of the reverse sentence
        reverseSentence.unshift(word);
      // if the current character is a space and the word is not empty, add the word to the beginning of the reverse sentence
      } else if (sentence[char] === " " && word.length > 0) {
        reverseSentence.unshift(word);
        word = "";
      // if the current character is not a space, add it to the word
      } else if (sentence[char] !== " ") {
        word += sentence[char];
      }
      // increment the character
      // note: if the current character is a space & word length is 0, we don't add the character anywhere and just increment
      char++;
  }

  console.log(reverseSentence.join(" "))

  return reverseSentence.join(" ")
};

reverseWords("the sky is blue")
// Output: "blue is sky the"

reverseWords("  hello world  ")
// Output: "world hello"

reverseWords("a good   example")
// Output: "example good a"