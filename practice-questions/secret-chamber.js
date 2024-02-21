// The Secret Chamber
// Programming challenge description:

// In this challenge, the set of translations forms a directed graph on the 26 letters of the alphabet. You are given two query words s1s2s3...sL and t1t2t3...tL of equal length L. You need to check whether for each 1<=i<=L, there is a path from si to ti in the graph of letter translations. Keep in mind, that if the lengths are different, the answer is definately "no".

// An easy way of doing this is to precompute the transitive closure of the graph using the Floyd-Warshall algorithm. This algorithm allows to check each pair (si, ti) in constant time. Since the bounds are small, you may use any polynomial time algorithm.

// You probably know that there is a spectacular stone sculpture featuring four famous U.S. presidents at Mount Rushmore and this monument contains a secret chamber. It can be found behind the head of Abraham Lincoln and was designed to serve as a Hall of Records to store important historical U.S. documents and artifacts. Historians claim that the construction of the hall was halted in 1939 and the uncompleted chamber was left untouched until the late 1990s, but this is not the whole truth.

// In 1982, an archaeologist secretly visited the monument and found that the chamber actually was completed, but it was kept confidential. This seemed suspicious and after some poking around, she found a hidden vault and some documents inside. Unfortunately, these documents did not make any sense. She suspected that they had been written in a code, but she could not decipher them despite all her efforts. Earlier this week she discovered the key to a document that contains a list of translations of letters. Some letters may have more than one translation, and others may have no translation.

// By repeatedly applying some of these translations to individual letters in the gibberish documents, she might be able to decipher them to yield historical U.S. documents. She needs your help. You are given the possible translations of letters and a list of pairs of original and deciphered words. Your task is to verify whether the words in each pair match. Two words match if they have the same length and if each letter of the first word can be turned into the corresponding letter of the second word by using the available translations zero or more times. Check the attached document for a hint on input and output values with a sample provided on both.
// Input:

// The first line of input contains two integers m (1 ≤ m ≤ 500) and n (1 ≤ n ≤ 50), where m is the number of translations of letters and n is the number of word pairs. Each of the next m lines contains two distinct space-separated letters a and b, indicating that the letter a can be translated to the letter b. Each ordered pair of letters (a, b) appears at most once. Following this are n lines, each containing a word pair to check. Translations and words use only lowercase letters ‘a’–‘z’, and each word contains at least 1 and at most 50 letters.
// Output:

// For each pair of words, display yes if the two words match, and no otherwise.
// Test 1
// Test Input
// 3 3
// a c 
// b a 
// a b
// aaa abc 
// abc aaa
// acm bcm
// Expected Output
// yes
// no
// yes
// Test 2
// Test Input
// 9 5
// c t
// i r
// k p
// o c
// r o
// t e
// t f
// u h
// w p
// we we
// can the
// work people
// it of
// out the
// Expected Output
// yes
// no
// no
// yes

// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// let stdin = '';
// let result = [];

// process.stdin.on('data', (chunk) => {
//   stdin = `${stdin}${chunk}`;
// }).on('end', () => {
//   const lines = stdin.trim().split('\n');
//   for (const line of lines) {
//     process.stdout.write(`${line}\n`);
//     result.push(line.trim())
//   }
//   // code
//   console.log("result arr", result)
// });

// // create translation table