// Remove Blanks
// Create a function that, given a string, returns all of that 
// string’s contents, but without blanks. If given the string 
// " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
function remBlank(str){
    return str.split(" ").join("")
}

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
function digits(str){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        // identify if str[i] is a number
        if (str[i] == 0 || str[i] == 1 || str[i] == 2 || str[i] == 3 || str[i] == 4 || str[i] == 5 || str[i] == 6 || str[i] == 7 || str[i] == 8 || str[i] == 9) {
            count ++;
        }
    }
    return count;
}

// Acronyms
// Create a function that, given a string, returns the string’s acronym 
// (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".
function acronym(str){
    let newStr = "";
    let words = str.split(" ");
    console.log(words);
    for (let i=0; i < words.length; i++){
        // newArr.push(words[0[0]]);
        if (words[i] == false) {
            continue;
        } else {
            newStr += words[i][0].toUpperCase();
        }
    }
    return newStr;
}
console.log(acronym(" there's no free lunch - gotta pay yer way. "))


// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
function count(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] ==" "){
            continue;
        }
        else {
            count ++
        }
    }
    return count;
}


// Remove Shorter Strings
// Given a string array and value (length), remove any strings 
// shorter than the length from the array.

function removeShort(strArr, val) {
    for (var ind = strArr.length-1; ind >= 0; ind--) {  // start from the end of the array and decrement down to the first index.
        if (strArr[ind].length < val) {     // if the length of the current index (current word in the array) is less that parameter v,
            for (var i = ind; i < strArr.length-1; i++){
                var temp = strArr[i];
                strArr[i] = strArr[i+1];
                strArr[i+1] = temp;
            }
            strArr.pop();
        }
    }
    return strArr;
}

console.log(shorty(["Hello", "World", "hi", "I", "am", "sleepyyyyy"], 3))