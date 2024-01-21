let myVar = 0 ;
let addButton = document.querySelector('.add-button');
let subButton = document.querySelector('.sub-button');

addButton.addEventListener('click',function() {
        myVar++;
        document.getElementsByTagName("p")[0].innerHTML = myVar;
});

subButton.addEventListener('click',function() {
    myVar--;
    document.getElementsByTagName("p")[0].innerHTML = myVar;
});

document.getElementsByTagName("p")[0].innerHTML = myVar;

/*var myVar = 0;
var button = document.querySelector('.button');
var p = document.querySelector('p');

button.addEventListener('click', function() {
  myVar++;
  p.textContent = myVar;
});

p.textContent = myVar;*/
