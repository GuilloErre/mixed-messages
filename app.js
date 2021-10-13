// Arrays of words for title
const firstWordArray = ["Fly", "Run", "Rise", "Power", "Guide"];
const secondWordArray = ["quickly", "eternally", "gracefully"];
const thirdWordArray = ["through", "into", "above", "below", "under", "inside"];
const fourthWordArray = ["shining", "aggresive", "bloody", "fantastical"];
const fifthWordArray = ["path", "sun", "destiny", "stars", "light", "lands", "ice"];

// Initialize variables
const words = [];
let title = "";


/**
 * 
 * @param {Array} words 
 * @returns title string
 */
function generateSongName(words) {
    let songTitle = `${words[0]} ${words[1]} ${words[2]} a ${words[3]} ${words[4]}`;
    return songTitle;
}

/**
 * get the words from the getRandomlyWordFromArray function for each array
 * @returns array of words selected
 */
function getWordsArraysReturnResults() {
    words.push(getRandomlyWordFromArray(firstWordArray));
    words.push(getRandomlyWordFromArray(secondWordArray));
    words.push(getRandomlyWordFromArray(thirdWordArray));
    words.push(getRandomlyWordFromArray(fourthWordArray));
    words.push(getRandomlyWordFromArray(fifthWordArray));

    return words
}

/**
 * Uses the array given to get a random item of the array
 * @param {Array} wordArray 
 * @returns item of array
 */
function getRandomlyWordFromArray(wordArray) {
    let randomNumber = Math.floor(Math.random() * wordArray.length);
    return wordArray[randomNumber]
}

/**
 * Run setting variables
 */
function initialize() {
    getWordsArraysReturnResults();
    title = generateSongName(words);
}

// Running program and print result
initialize()
console.log(title);