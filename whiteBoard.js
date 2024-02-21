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
        this.length = null;
    }

    // add node the end of list
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next; 
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() { // removing first element
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length --;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) { // add element to beginning of list
        let newNode = new Node(val); 
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++; 
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0; 
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++
        }
        return current;
    }

    set(index, val) { // find a val and reassign value
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

let ls = new SinglyLinkedList();
ls.push(1)
ls.push(2)
ls.push(3)
ls.push(4)
ls.push(5)

module.exports = {SinglyLinkedList}
// push, pop, shift, unshift, get, set, insert, remove, reverse, print
