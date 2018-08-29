/**
 * Given a string, reverse each word in the sentence
 * "Welcome to this Javascript Guide!" should be become
 * "emocleW ot siht tpircsavaJ !ediuG"
 */

function reverse_each_word_in_sentence(sentence) {
    const words = sentence.split(' ');
    const result = [];

    for (let word of words) {
        result.push(word.split('').reverse().join(''))
    }

    return result.join(' ');
}


module.exports =  reverse_each_word_in_sentence;