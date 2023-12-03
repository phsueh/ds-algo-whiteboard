class Node { 
  constructor(val) {
    this.value = val;
    this.next  = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; 
    this.length = 0;
 }

// head is to the left think of it as a caterlpiller
// we push to the end of the list

 push(val) { // head and tail all reference a node
  let newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode; 
    this.tail = newNode; 
  }
  this.length++;
  return this; // this linked list
 }
}
