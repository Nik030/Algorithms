function dictionary(text) {
    let array = text.toLowerCase().match(/[a-z]/g);
    let dictionary = {};
    for (let letter of array) {
        if (dictionary[letter]) {
            dictionary[letter] += 1;
        } else dictionary[letter] = 1;
    }
        return dictionary;
    }
    


let text = "The quick fox jumps over the lazy dog";
console.log(dictionary(text));