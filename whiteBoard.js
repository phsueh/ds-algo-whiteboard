class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let first = new Node("Hi");
first.next = new Node("there")