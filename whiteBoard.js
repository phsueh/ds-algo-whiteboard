var majorityElement = function(nums) {
    
    // hash table
    // find largest value and return the key

    let hashTable = {}; 

    for (let i = 0; i < nums.length; i++) {
        if (hashTable[nums[i]] > 0) {
            hashTable[nums[i]]++;
        } else {
            hashTable[nums[i]] = 1; 
        }
    }

    let count = 0;
    let majEle; 

    for (let ele in hashTable) {
        if (hashTable[ele] > count) {
            count = hashTable[ele];
            majEle = ele; 
        }
    }

    return majEle;

};

console.log(
    majorityElement([3,2,3]),
    // majorityElement([2,2,1,1,1,2,2])
)