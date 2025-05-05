const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];

const products = [
  { id: 101, name: "Product A", price: 50 },
  { id: 102, name: "Product B", price: 100 },
  { id: 103, name: "Product C", price: 75 },
];

const orders = [
  { id: 1001, userId: 1, productId: 101, quantity: 2 },
  { id: 1002, userId: 2, productId: 102, quantity: 1 },
  { id: 1003, userId: 1, productId: 103, quantity: 3 },
];

const generateOrderSummary = ({ orders, products, users }) => {
  // TODO: it should generate summary for every order
  // so that response will look like this:
  //{
  //  orderId: 1001,
  //  user: { id: 1, name: 'Alice', age: 30 },
  //  product: { id: 101, name: 'Product A', price: 50 },
  //  total: 100 // price * quantity
  //}

  // Additional (OPTIONAL) task
  // what is time complexity of your solution?
  // is it possible to make it in O(n) ?
  // rewrite your solution to be the fastest



  return orders;
};

console.log(generateOrderSummary(orders, products, users));

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = null;
//     }

//     // add node the end of list
//     push(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     pop() {
//         if (!this.head) return undefined;
//         let current = this.head;
//         let newTail = current;
//         while (current.next) {
//             newTail = current;
//             current = current.next;
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length--;
//         if (this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return current;
//     }

//     shift() { // removing first element
//         if(!this.head) return undefined;
//         let currentHead = this.head;
//         this.head = currentHead.next;
//         this.length --;
//         if (this.length === 0) {
//             this.tail = null;
//         }
//         return currentHead;
//     }

//     unshift(val) { // add element to beginning of list
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this;
//     }

//     get(index) {
//         if (index < 0 || index >= this.length) return null;
//         let counter = 0;
//         let current = this.head;
//         while (counter !== index) {
//             current = current.next;
//             counter++
//         }
//         return current;
//     }

//     set(index, val) { // find and idx and reassign value
//         let foundNode = this.get(index);
//         if(foundNode) {
//             foundNode.val = val;
//             return true;
//         }
//         return false;
//     }

//     insert(index, val) {
//         if (index < 0 || index > index.length) return false;
//         if (index === this.length) return !!this.push(val);
//         if (index === 0) return !!this.unshift(val);

//         let newNode = new Node(val);
//         let prev = this.get(index-1);
//         let temp = prev.next; // this node is at the position I want to insert
//         prev.next = newNode; //inserts at index
//         newNode.next = temp;
//         this.length++;
//         return true;
//     }

//     reverse() {
//         // replace head and tail;
//         let node = this.head;
//         this.head = this.tail;
//         this.tail = node;

//         let next;
//         let prev = null;

//         for (let i = 0; i < this.length; i++) {
//             next = node.next;
//             node.next = prev;
//             prev = node;
//             node = next;
//         }

//         // how would I reverse an array?

//         return this;
//     }
// }

// let ls = new SinglyLinkedList();
// ls.push(1)
// ls.push(2)
// ls.push(3)
// ls.push(4)
// ls.push(5)

// module.exports = {SinglyLinkedList}
// push, pop, shift, unshift, get, set, insert, remove, reverse, print
