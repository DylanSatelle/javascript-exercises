const reverseString = function(word) {

    let arr = word.split("");
    console.log(arr.reverse());
    console.log(arr.join());
    return (arr.join(""));
};

// Do not edit below this line
module.exports = reverseString;
