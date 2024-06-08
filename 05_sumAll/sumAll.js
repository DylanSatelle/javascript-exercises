const sumAll = function(...args) {

    //get value 1 store in i
    //get value 2 store in x
    //increment i until it = x
    //on each increment add number to newValue

    if (args[0] + args[1] > 0) {
    args.sort(); 
    let newValue = 0; 
    for(i=args[0]; i<=args[1]; i++) 
    {
        newValue = newValue+i; 
    }
    return (newValue);
}
    else {
        return("ERROR");
    }

    
};

// Do not edit below this line
module.exports = sumAll;
