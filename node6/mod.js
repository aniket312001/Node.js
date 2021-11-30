console.log("This is module")


function average(arr) {
    let sum=0;
    arr.forEach(element => {
        sum += element;
        
    });
    return sum/arr.length;
}

 
// module.exports = average;    //  ---- 1


module.exports = {     //    ---  2
    avg: average,
    name: "Aniket",
    repo : "Github"
}

module.exports.friend = "Sam";   //   --- 3