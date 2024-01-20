let maVariable = 0 ;

let myButton = document.querySelector('.button');

myButton.addEventListener('click',function() {
    myBody.classList.toggle('active')
    mySquareButton.classList.toggle('alt-square-button')
})

function myFunction () {
    maVariable = maVariable + 1;
}


function myClick () {
    myButton.addEventListener("click", myFunction)
};

console.log(maVariable);
