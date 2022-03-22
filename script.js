let buttonSub = document.querySelector("#btn");
let clr = document.querySelector("#clearBtn");
let input = document.querySelector("#input");
let answer = document.querySelector("#messege");

buttonSub.addEventListener("click", function () {
    if(input.value === ''){
        alert('Enter a letters');

    }else {
        answer.innerText = input.value;
        buttonSub.innerHTML = 'SubmitTED'
        buttonSub.style.backgroundColor = 'rgb(110, 101, 245)'

    }

})
clr.addEventListener('click', function () {
    buttonSub.innerHTML = 'Submit'
    answer.innerHTML = '';
    input.value = '';
})