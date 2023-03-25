function checkWord() {
    const palindome = document.getElementById('palindome').value
    const invalid = document.getElementById('invalid')
    const wrong = document.getElementById('wrong')
    const right = document.getElementById('right')

    const forwardWord = palindome.split("");
    const reverseWord = forwardWord.reverse();
    const joinReverseWord = reverseWord.join("");


    if (palindome === "") {
        invalid.hidden = false;
    } else if (palindome === joinReverseWord) {
        right.hidden = false;
    } else {
        wrong.hidden = false;
    }

}