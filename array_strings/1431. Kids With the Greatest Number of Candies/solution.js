/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  // first, determine which kid has the most candies
  var candyLeader = Math.max(...candies);

  // then, subtract the extra candies from the most candies to get the potential most candies threshold
  var greatestCandiesThreshold = candyLeader - extraCandies;

  let facts = []

  for (let initialCandy of candies) {
      // if the kid is at or above that number, return true
      if (initialCandy >= greatestCandiesThreshold) {
          facts.push(true);
      } else {
          facts.push(false)
      }
  }

  console.log(facts)
  return facts;
};

kidsWithCandies([2,3,5,1,3], 3)
// Output: [true,true,true,false,true]

kidsWithCandies([4,2,1,1,2], 1)
// Output: [true,false,false,false,false]

kidsWithCandies([12,1,12], 10)
// Output: [true,false,true]