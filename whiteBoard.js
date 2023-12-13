// class Node{
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinaryTree {
//     constructor() {
//         this.root = null;
//     }

//     get23() {
//         return myBTree.root.right.right;
//     }

//     getTheLeftLeaf() { //get 7
//         let value = []
//         let traverse = function(node) {
//             if (node.left) {
//                 traverse(node.left) // is challengeing on understanding how this "moves to the next node"
//             } else {
//                 value.push(node.val);
//             }
//         }
//         traverse(this.root);
//         return value;
//     }

//     getThisVal(val) { // only passing in an existing value
//         let value = [];
//         let traverse = function(node) {
//             if (node.val !== val && node.left !== null) {
//                 traverse(node.left);
//             } 
//             if (node.val !== val && node.right !== null) {
//                 traverse(node.right);
//             } 
//             if (node.val === val) {
//                 value.push(node.val);
//             }
//             // if (node.val !== val) {
//             //     value.push("not here")
//             // }
//         }
//         traverse(this.root);
//         return value; 
//     }
// }

// let myBTree = new BinaryTree();
// myBTree.root = new Node(1);
// myBTree.root.left = new Node(3);
// myBTree.root.right = new Node(5);
// myBTree.root.left.left = new Node(7);
// myBTree.root.right.left = new Node(12);
// myBTree.root.right.right = new Node(23);

// console.log(myBTree);

function getMilestoneDays(revenues, milestones) {
    const n = revenues.length;
    const milestoneDays = [];
  
    // Calculate cumulative revenue for each day
    const cumulativeRevenue = [revenues[0]];
    for (let i = 1; i < n; i++) {
      cumulativeRevenue[i] = cumulativeRevenue[i - 1] + revenues[i]; //previous day + revenue for that day
    }

    console.log(cumulativeRevenue) // [10, 30, 60, 100, 150]
  
    // Helper function to find the first day reaching or exceeding a milestone
    function findMilestoneDay(target) {
      for (let i = 0; i < n; i++) {
        if (cumulativeRevenue[i] >= target) {
          return i + 1; // Convert from 0-indexed to 1-indexed day
        }
      }
      return -1; // Return -1 if the milestone is never met
    }
  
    // Find milestone days for each milestone
    for (let i = 0; i < milestones.length; i++) {
      milestoneDays.push(findMilestoneDay(milestones[i]));
    }
  
    return milestoneDays;
  }
  
  // Example usage:
//   const revenues = [10, 20, 30, 40, 50];
//   const milestones = [30, 70, 110];
//   const result = getMilestoneDays(revenues, milestones);
//   console.log(result); // Output: [3, 4, 5]

//   var revenues_1 = [100, 200, 300, 400, 500];
//   var milestones_1 = [300, 800, 1000, 1400];
//   var revenues_2 = [700, 800, 600, 400, 600, 700];
//   var milestones_2 = [3100, 2200, 800, 2100, 1000];

//   console.log(
//     getMilestoneDays(revenues_1, milestones_1), // [2, 4, 4, 5]
//     getMilestoneDays(revenues_2, milestones_2) // [5, 4, 2, 3, 2]
//   )

  var leafSimilar = function(root1, root2) {
    
    let bfs = function(root) {
        let queue = [];
        let data = [];
        let node = root;
        queue.push(node)
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        console.log(data);
        return data;
    }

    let root1Leaf = bfs(root1).join("");
    let root2Leaf = bfs(root2).join("");

    console.log(root1Leaf, root2Leaf)

    return root1Leaf === root2Leaf ? true : false; 
};

console.log(
    leafSimilar([1,2,3], [1,3,2]),
    leafSimilar([3,5,1,6,2,9,8,null,null,7,4], [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8])
)