const repeatString = function(word, number) {

    let newWord = "";

    if (number === 0) {
        return "";
    }
    else if (number >= 1) {
        for (let i = 0; i < number; i++){
            newWord = newWord+word;
            console.log(newWord);
        }
        return newWord;
    }

    else {
        return "ERROR";
    }

};

//funct

// Do not edit below this line
module.exports = repeatString;


//