let myVar = 0 ;
let result = document.querySelector('p');
let addButton = document.querySelector('.add-button');
let subButton = document.querySelector('.sub-button');

addButton.addEventListener('click',function() {
        myVar++;
        result.innerHTML = myVar;
});

subButton.addEventListener('click',function() {
    myVar--;
    result.innerHTML = myVar;
});

result.innerHTML = myVar;

//document.getElementsByTagName("p")[0].innerHTML = maVariable; est une autre méthode poossible, mais Olivier préfère querySelector qui est plus puissant et moins compliqué à écrire
