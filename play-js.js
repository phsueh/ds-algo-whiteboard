// LC 155. Min Stack

const MinStack = function() {
    this.stack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    this.stack.push(value);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // O(n): scan the whole stack. Swap this for a min-stack to get O(1).
    let min = this.stack[0];
    for (let i = 1; i < this.stack.length; i++) {
        if (this.stack[i] < min) min = this.stack[i];
    }
    return min;
};