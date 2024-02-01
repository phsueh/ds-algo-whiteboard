var canConstruct = function(ransomNote, magazine) {
    let ransomHash = {};
    let magHash = {};

    for (let i = 0; i < ransomNote.length; i++) {
        if (ransomHash[ransomNote[i]] > 0) {
            ransomHash[ransomNote[i]]++;
        } else {
            ransomHash[ransomNote[i]] = 1;
        }
    }

    for (let i = 0; i < magazine.length; i++) {
        if (magHash[magazine[i]] > 0) {
            magHash[magazine[i]]++;          
        } else {
            magHash[magazine[i]] = 1; 
        }
    }
    
    // console.log(
    //     ransomHash, magHash
    // )

    for (let char in ransomHash) {
        if (!(char in magHash)) {
            return false;
        }
        if (magHash[char] < ransomHash[char]) { 
            return false
        }
    }
    
    return true; 

};

console.log(
    canConstruct("a", "b"), // false
    canConstruct("aa","ab"), // false
    canConstruct("aa","aab"), // true
    canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi") // false
)


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

//     // implement push
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

//     // implement pop
//     pop() {

//         if (this.length === 0) return undefined + " : list is empty"; 
//         let current = this.head; // node to pop
//         let newTail = current;
//         while (current.next) {
//             newTail = current
//             current = current.next
//         } 
//         this.length -- ;
//         if (this.length == 0) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.tail = newTail;
//             this.tail.next = null;
//         }
//         return current;
//     }

//     // implement shift
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

// }

// module.exports = {SinglyLinkedList}