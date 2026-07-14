class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){ // left to right
        // var node = this.root,
        //     data = [],
        //     queue = [];
        // queue.push(node);

        // while(queue.length){
        //    node = queue.shift();
        //    data.push(node.value);
        //    if(node.left) queue.push(node.left);
        //    if(node.right) queue.push(node.right);
        // }
        // return data;

        // bfs uses a queue; 

        let node = this.root;
        let data = []; 
        let queue = [];
        queue.push(node); 

        while (queue.length) {
            node = queue.shift(); 
            data.push(node.value); 
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data; 
    }
    DFSPreOrder(){ // making a copy 
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){ // deleting
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){ // sorting
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    deserialize(data) {

    }


}

function serialize(tree) {
    var data = []; 
    function traverse(node) {
        data.push(node.value); 
        node.left ? traverse(node.left) : data.push(null);
        node.right ? traverse(node.right) : data.push(null);
    }
    traverse(tree);
    console.log("data", data); 
    return data; 
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();
serialize(tree.root); 

// stack is LIFO
// queue is fifo

// Leetcode Problem 110: Balanced Binary Tree
// Determine if a binary tree is height-balanced

function isBalanced(root) {
  function checkHeight(node) {
    if (!node) return 0; // Base case: height of null node is 0

    // Recursively compute the height of the left subtree
    const leftHeight = checkHeight(node.left);
    if (leftHeight === -1) return -1; // If left subtree is unbalanced, propagate -1

    // Recursively compute the height of the right subtree
    const rightHeight = checkHeight(node.right);
    if (rightHeight === -1) return -1; // If right subtree is unbalanced, propagate -1

    // Check if current node is unbalanced
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    // Height is calculated here: max height of subtrees plus 1 for current node
    return Math.max(leftHeight, rightHeight) + 1;
  }

  return checkHeight(root) !== -1; // Tree is balanced if height check does not return -1
}