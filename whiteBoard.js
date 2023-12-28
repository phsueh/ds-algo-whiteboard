function solution(src) {

    let srcArr = src.split(" ");
    let resultArr = new Array; 

    console.log(src)

    for (let i = 0; i < srcArr.length; i++) {
        let str = srcArr[i];
        let tempStr = "";
        for (let j = 0; j < str.length; j++) {
            if (str[j] === '_' && str[j+1] !== '_' && str[j-1] !== '_' && str[j+1] !== undefined && str[j-1] !== undefined) {
                tempStr += str[j+1].toUpperCase(); 
                j += 2;
            }
            tempStr += str[j];
        }
        resultArr.push(tempStr)
    }

    return resultArr.join(" ");

}

let solution2 = function(src) {
    console.log(src)
    let resultStr = "";
    for (let i = 0; i < src.length; i++) {
        if (
            src.charCodeAt(i) === 95 && 
            src.charCodeAt(i+1) !== 95 && 
            src.charCodeAt(i-1) !== 95 && 
            src.charCodeAt(i+1) !== 32 &&
            src.charCodeAt(i-1) !== 32) {
                resultStr += src[i+1].toUpperCase();
                i += 2; 
        }
        resultStr += src[i];
    }
    return resultStr; 
}

console.log(
    solution("the comp_anies co_vention is to use __camel_case not_ __sn_ake case like _the_variable"),
)

console.log(
    solution2("the comp_anies co_vention is to use __camel_case not_ __sn_ake case like _the_variable")
)