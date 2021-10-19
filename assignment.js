// Program 1
var input = "My name is Ram. I am Ram Kumar. Ram, Please come here"

//Remove dot and comma from input string
input = input.replace(/\.|\,/g, "")

var words = input.split(" ")

var output = {}

for (var j = 0; j < words.length; j++) {

    var word = words[j].toLowerCase()

    if (output[word] != undefined) {

        output[word] = output[word] + 1

    } else {

        output[word] = 1
    }

}

console.log(output)

console.log("\n\n.......................................................\n\n")


// Program 2
input = {
    fName: "Name 1",
    lName: "L Name 1",
    obj:{
        fName: "Name 2",
        lName: "L Name 2",
        obj:{
            fName: "Name 3",
            lName: "L Name 3",
        }
    }
}

function changeObjKeys(obj) {

    var newObj = {}
    var keys = Object.keys(obj)
    for (var i = 0 ; i < keys.length; i ++) {

        if (keys[i] == "obj") {
            newObj["obj"] = changeObjKeys(obj.obj)
        } else {
            var key = keys[i][0] + "_" + keys[i].slice(1)
            newObj[key] = obj[keys[i]]
        }
    }
    return newObj

}

var result = changeObjKeys(input)
console.log(result)


console.log("\n\n.......................................................\n\n")


//Program 3
var input = [[2,3,0], [5,9,8], [7,6,3]]
var first = 0;
var last = 2;
var firstRes = 0;
var lastRes = 0;

for (var i = 0; i < input.length; i ++ ) {
    firstRes = firstRes + input[i][first]
    lastRes = lastRes + input[i][last]
    first++
    last--
}

var res = [firstRes, lastRes]
console.log(res)


console.log("\n\n.......................................................\n\n")


//Program 4
var arr = [1,3,2,5,8,3,9,23]
var sortedArr = arr.sort((a,b) => b-a)
console.log(sortedArr[1])


console.log("\n\n.......................................................\n\n")


//Program 5
var inputStr = "the simplestThings in LIFE are alwaysThe best"
var words = inputStr.split(" ").map(w => {
    if(w == w.toUpperCase()) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase()
    } else {
        return w[0].toUpperCase() + w.slice(1)
    }
})

const resultStr = words.join(" ").replace(/([A-Z])/g, " $1");
console.log(resultStr)
