// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if (this.head = null){ // or !this.head
            newNode = this.head; 
            newNode = this.tail;
        } else {
            newNode = this.tail.next
            newNode = this.tail;
        }
        this.length++;
        return this;
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")