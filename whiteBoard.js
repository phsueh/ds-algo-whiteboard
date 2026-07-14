const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];

const products = [
  { id: 101, name: "Product A", price: 50 },
  { id: 102, name: "Product B", price: 100 },
  { id: 103, name: "Product C", price: 75 },
];

const orders = [
  { id: 1001, userId: 1, productId: 101, quantity: 2 },
  { id: 1002, userId: 2, productId: 102, quantity: 1 },
  { id: 1003, userId: 1, productId: 103, quantity: 3 },
];

const generateOrderSummary = ({ orders, products, users }) => {
  // TODO: it should generate summary for every order
  // so that response will look like this:
  //{
  //  orderId: 1001,
  //  user: { id: 1, name: 'Alice', age: 30 },
  //  product: { id: 101, name: 'Product A', price: 50 },
  //  total: 100 // price * quantity
  //}

  // Additional (OPTIONAL) task
  // what is time complexity of your solution?
  // is it possible to make it in O(n) ?
  // rewrite your solution to be the fastest



  return orders;
};

console.log(generateOrderSummary(orders, products, users));

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
//         this.length = null;
//     }

//     // add node the end of list
//     push(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     pop() {
//         if (!this.head) return undefined;
//         let current = this.head;
//         let newTail = current;
//         while (current.next) {
//             newTail = current;
//             current = current.next;
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length--;
//         if (this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return current;
//     }

//     shift() { // removing first element
//         if(!this.head) return undefined;
//         let currentHead = this.head;
//         this.head = currentHead.next;
//         this.length --;
//         if (this.length === 0) {
//             this.tail = null;
//         }
//         return currentHead;
//     }

//     unshift(val) { // add element to beginning of list
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head
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
//         while (counter !== index) {
//             current = current.next;
//             counter++
//         }
//         return current;
//     }

//     set(index, val) { // find and idx and reassign value
//         let foundNode = this.get(index);
//         if(foundNode) {
//             foundNode.val = val;
//             return true;
//         }
//         return false;
//     }

//     insert(index, val) {
//         if (index < 0 || index > index.length) return false;
//         if (index === this.length) return !!this.push(val);
//         if (index === 0) return !!this.unshift(val);

//         let newNode = new Node(val);
//         let prev = this.get(index-1);
//         let temp = prev.next; // this node is at the position I want to insert
//         prev.next = newNode; //inserts at index
//         newNode.next = temp;
//         this.length++;
//         return true;
//     }

//     reverse() {
//         // replace head and tail;
//         let node = this.head;
//         this.head = this.tail;
//         this.tail = node;

//         let next;
//         let prev = null;

//         for (let i = 0; i < this.length; i++) {
//             next = node.next;
//             node.next = prev;
//             prev = node;
//             node = next;
//         }

//         // how would I reverse an array?

//         return this;
//     }
// }

// let ls = new SinglyLinkedList();
// ls.push(1)
// ls.push(2)
// ls.push(3)
// ls.push(4)
// ls.push(5)

// module.exports = {SinglyLinkedList}
// push, pop, shift, unshift, get, set, insert, remove, reverse, print


// more practice from a technical round


import { BookWithReviews } from "./model";

/**
 * Parses passed books and reviews arrays to create an array of BookWithReviews object. Each row from books input array
 * should have a corresponding row in resulting array. For example, for following input data:
 *    books = [ { "id" : 101, "title" : "Some book title" } ]
 *    reviews = [ { "bookId" : 101, "author" : "John", "content" : "Great book!" } ];
 * It should return following result:
 *    result = [ { id: 101, title: "Some book title", reviews : [ { author: "John", content: "Great book!" }] } ];
 *
 * @param books - an array of input books, see 'src/app/dataset/books.json' for sample data.
 * @param reviews - an array of input reviews, see 'src/app/dataset/reviews.json' for sample data.
 * @returns {Array} - an array of BookWithReviews objects
 */
export function parseBooksData(books, reviews) {
  console.log("books =", books); 
  console.log("reviews =", reviews);
  
  let result = {}; 
  let bookMap = new Map(); 
  
  // create book map
  for (let book of books) {
    for (let review of reviews) {
      if (review.bookId === book.id) {
        bookMap.set(review.bookId, {id : "",  title : "", reviews : []}); 
      }
    }
  }
  
  // add reviews to book
  for (let review of reviews) {
    if (bookMap.has(review.bookId)) {
      let currentBook = bookMap.get(review.bookId); // this might not be possible
      currentBook.reviews.push({author : reviews.author, content : reviews.content});
    }
  }
  
  return result;  // TODO: Implement
}

/**
 * Displays data from passed `books` array. For example, if books argument would have following value:
 *    books = [ { id: 101, title: "Some book title", reviews : [ { author: "John", content: "Great book!" }] } ];
 * then, following structure should be created under the parentNode:
 * <ol>
 *    <li>
 *      <span>Some book title</span>
 *      <ul>
 *        <li>Great book! by John</li>
 *      </ul>
 *    </li>
 * </ol>
 * @param parentNode - parent node for all books
 * @param booksWithReviews - an array of BookWithReviews objects.
 */
export function displayBooksWithReviews(parentNode, booksWithReviews) {
  console.log("parentNode =", parentNode); 
  console.log("booksWithReviews =", booksWithReviews); 
  
  // TODO: Implement
}

// identical trees
function isSameTree(p, q) {
  if (!p && !q) return true;
   if (!p || !q) return false;

   let data1 = []; 
   let data2 = []; 
   
   function traverse1(node) {
       data1.push(node.val);
       node.left ? traverse1(node.left) : data1.push(null); 
       node.right ? traverse1(node.right) : data1.push(null);
   }
   function traverse2(node) {
       data2.push(node.val);
       node.left ? traverse2(node.left) : data2.push(null); 
       node.right ? traverse2(node.right) : data2.push(null);
   }
   
   traverse1(p);
   traverse2(q);

   return data1.join() === data2.join(); 
}