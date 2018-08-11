// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = [];

    for (let word of str.split(' ')) {
        const uppercasedWord = word[0].toUpperCase() + word.slice(1);
        result.push(uppercasedWord);
    }

    return result.join(' ');
}

function capitalize2(text) {
    return text.split(' ').map(word => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}

module.exports = capitalize;
