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
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){ // method requires finding the node before the current tail. we find that node by finding the value of the node that occures before a node the returns null after calling .next on the node. These nodes have a one way vision so I need to "see where each node is going "
        if(!this.head) return undefined; // if no head nothing to pop
        var current = this.head;
        var newTail = current;
        while(current.next){ // at some point current.next will be null - how did .next become null for the current tail? - become .next will always be null unless assigned a value by the push method
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }
}


var list = new SinglyLinkedList()
list.push("HELLO") 
list.push("GOODBYE")
list.push("!")
