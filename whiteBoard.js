class Node {
    constructor(val) {
        this.val = val; 
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if (!this.head) { // it not null - not null is true
            this.head = newNode; 
            this.tail = newNode;
        } else {
            this.tail.next = newNode; 
            this.tail = newNode; 
        }
        this.length++; 
        return this // the list
    }
}

class Speak {
    sayHello() {
        console.log("hello, world!")
    }
}

module.exports = {SinglyLinkedList}