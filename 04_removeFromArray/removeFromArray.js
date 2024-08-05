const removeFromArray = function(array, ...args) {
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
          }
    });
    return newArray;
};

console.log(removeFromArray([1,2,3,4,5,6,7,8],3));