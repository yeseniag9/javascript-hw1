// #1. Write a function that takes in the string and the list of dog names, loops through the list and checks that the 
// current name is in the string passed in. The output should be: "Matched dog_name" if name is in the string; if  no
// matches are present, console.log "No Matches"

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"] 

function findWords() {
    for (let i of dog_names) {
        if (dog_string.match(i)) {
            return "Matched " + i
        } else {
            return "No Matches"
        }
    }
}

console.log(findWords(dog_names, dog_string))

// #2. Write a function that takes in an array and removes every even index with a splice, and replaces it with the 
// string "even index" 

var arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function replaceEvens() {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr.splice(i++, 1, "even index")
        }
    }
    
    return arr
}

console.log(replaceEvens(arr))