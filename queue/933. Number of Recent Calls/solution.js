
var RecentCounter = function() {
  this.myQueue = [];
  const isInited = false
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  // add the time to the queue
  this.myQueue.push(t);
  // get the lower range of the time
  const lowerRange = t - 3000

  // if the first element in the queue is less than the lower range
  while (this.myQueue[0] < lowerRange) {
      // remove the first element in the queue
      this.myQueue.shift();
  }

  // return the length of the queue
  return this.myQueue.length
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
// Output
// [null, 1, 2, 3, 3]