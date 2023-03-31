const openBtn = document.getElementById('open-btn');
const modelContainer = document.getElementById('model-container');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function(){
    modelContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modelContainer.style.display = 'none';
});

window.addEventListener('click', function(e){ //you can also asign to document
   if (e.target  === modelContainer) {
       modelContainer.style.display = 'none';
   }
});

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