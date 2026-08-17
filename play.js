// AI GENERATED SOLUTION

var updateMatrix = function(mat) {
    const rows = mat.length;
    const cols = mat[0].length;

    const result = Array.from(
        { length: rows },
        () => Array(cols).fill(Infinity)
    );
    
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    function bfs(startRow, startCol) {
        const queue = [[startRow, startCol, 0]];
        let index = 0;

        const visited = Array.from(
            { length: rows },
            () => Array(cols).fill(false)
        );

        visited[startRow][startCol] = true;


        console.log("queue = ", queue); 
        console.log("visited[startRow][startCol] = ", visited);

        while (index < queue.length) {
            const [row, col, distance] = queue[index++];

            // Found a zero
            if (mat[row][col] === 0) {
                return distance;
            }

            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;

                if (
                    newRow >= 0 &&
                    newRow < rows &&
                    newCol >= 0 &&
                    newCol < cols &&
                    !visited[newRow][newCol]
                ) {
                    visited[newRow][newCol] = true;
                    queue.push([newRow, newCol, distance + 1]);
                }
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (mat[r][c] === 0) {
                result[r][c] = 0;
            } else {
                result[r][c] = bfs(r, c);
            }
        }
    }

    console.log("result : ", result); 

    return result;
};

updateMatrix([[0,0,0],[0,1,0],[0,0,0]]); 
console.log("end"); 

/**
 * @param {string} s
 * @return {boolean}
 */



//  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

var isValid = function(s) {
        const stack = [];
        const mapping = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (const c of s) {
            if (Object.values(mapping).includes(c)) { // if c is an opening bracket push into the stack
                stack.push(c);
            } else if (mapping.hasOwnProperty(c)) { // if c is a closing bracket
                if (!stack.length || mapping[c] !== stack.pop()) { // if the stack is empty nothing FALSE, if the last last value in the stack doesn't correspond the correct closing character FALSE
                    return false;
                }
            }
        }

        return stack.length === 0;    
};