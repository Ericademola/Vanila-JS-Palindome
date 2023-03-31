const response = document.getElementById('response');
const modelContainer = document.getElementById('model-container');
const closeBtn = document.getElementById('close-btn');
const request = document.querySelector('.request');
const palindome = document.getElementById('palindome');
const answer = document.getElementById('answer');


response.addEventListener('click', function(){
    const checkPalindome = palindome.value.split("").reverse().join("");

    if (checkPalindome === "") {
        request.style.color = 'blue';
        modelContainer.style.display = 'block';
        answer.innerText = 'Please Input a Value';
    } else if (checkPalindome === palindome.value) {
        request.style.color = 'green';
        modelContainer.style.display = 'block';
        answer.innerText = 'Correct, The Input is a Palindome';
    } else {
        request.style.color = 'red';
        modelContainer.style.display = 'block';
        answer.innerText = 'Try Again, The Input is  Not a Palindome';
    }
});

closeBtn.addEventListener('click', function(){
    modelContainer.style.display = 'none';
});

window.addEventListener('click', function(e){ //you can also asign to document
   if (e.target  === modelContainer) {
       modelContainer.style.display = 'none';
   }
});