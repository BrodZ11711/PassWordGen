/* Below will link the sliding amount and the textbox amount, so they produce the same value */
const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNum = document.getElementById
('characterAmountNum')
/* ------------------------------------------------------------------------ */
/* Adding the other user input elements */
const checkUpperElement = document.getElementById
('checkUpper')
const checkNumElement = document.getElementById
('checkNum')
const checkSymElement = document.getElementById
('checkSym')

const form = document.getElementById('passwordGenForm')
const passDisplay = document.getElementById('passDisplay')

/* Assigning the character key codes */
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
/* The char codes for symbols are all over the place, instead of it being nice and uninterrupted like the 
the rest, this will need to be .concat, adding a new array within the function */
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat (
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)

/* This function will be called whenever the values of Range Or Number are changed*/
characterAmountNum.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

/* This will stop the submit button from just refrshing the page, or submitting when empty */
/* (e) is the same as (event) */
form.addEventListener('submit', e => {
    e.preventDefault()
/* This will see what parameters the user has allowed to be used */
    const characterAmount = characterAmountNum.value
    const checkUpper = checkUpperElement.checked
    const checkNum = checkNumElement.checked
    const checkSym = checkSymElement.checked
    const password = generatePassword(characterAmount, checkUpper, checkNum, checkSym)
    passDisplay.innerText = password

    
})

/* Generating the password */
function generatePassword(characterAmount, checkUpper, checkNum, checkSym) {
    /* This will grab the charcater codes to assign to the password */
    let charCodes = LOWERCASE_CHAR_CODES
    if (checkUpper) charCodes = charCodes.concat
    (UPPERCASE_CHAR_CODES)
    if (checkNum) charCodes = charCodes.concat
    (NUMBER_CHAR_CODES)
    if (checkSym) charCodes = charCodes.concat
    (SYMBOL_CHAR_CODES)

    /* Variable to store the Password */
    const passCharacters = []
    /* This will cycle through, grabbing a key code every loop */
    for (let i = 0; i < characterAmount; i++ ) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)] /* Math.Random is grabbing a random # between 0 and our character amount, and .Floor is making it an Interger */
        passCharacters.push(String.fromCharCode(characterCode))
    }
    return passCharacters.join('') 
}

/* Generating Arrays of Character Codes to be used */
function arrayFromLowToHigh(low, high) {
    const array = [] /* <--- Empty till results are pushed to it */
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

/* (e) is the same as (event) */
function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNum.value = value
    characterAmountRange.value = value
}