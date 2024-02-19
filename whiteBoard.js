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
//         this.length = 0;
//     }

//     // implement push // add a node to the end of a list
//     push(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++
//         return this
//     }

//     // implement pop - this is the harder on for me because of moving to the end
//     pop() {
//         if(!this.head) return undefined;
//         let current = this.head;
//         let newTail = current;
//         while(current.next) {
//             newTail = current;
//             current = current.next;
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length --;
//         if (this.length == 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return current;
//     }

//     // implement shift - removes the head
//     shift() {
//         if (!this.head) return undefined;
//         let currentHead = this.head;
//         this.head = currentHead.next
//         this.length --
//         if (this.length === 0) {
//             this.tail = null;
//         }
//         return currentHead; // head that was removed
//     }

//     // adds a value to beginning
//     unshift(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
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
//         while(counter !== index) {
//             current = current.next;
//             counter++
//         }
//         return current
//     }

// }

// module.exports = {SinglyLinkedList}
