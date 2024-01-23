let maVariable= `, bande de filous!`;
let result = document.querySelector('p');
//querySelector ne prend que le PREMIER élément avec l'attribut div
//querySelectorAll prend tous les élément avec l'attribut div

//document.getElementsByTagName("p")[0].innerHTML = maVariable; autre méthode mais Olivier préfère querySelector qui est plus puissant et moins compliqué à écrire

result.innerHTML += `<span>${maVariable}</span><p></p>`;   