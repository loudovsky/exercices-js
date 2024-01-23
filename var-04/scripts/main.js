let myTab = [4, 60, 88, 127, 36, 95, 44, 55];
let text = "";
let myButton = document.querySelector('.button');

for (let i = 0; i < myTab.length; i++) {
        text += `<li>${myTab[i]}</li>`
        // text += "<li>" + myTab[i] + "</li>" => autre manière de l'écrire
        document.querySelector("ul").innerHTML = text;
}

function numAverage() { 
        let sum = 0;
        for (let i = 0; i < myTab.length; i++) {
        sum += myTab[i]; 
        }
        return sum / myTab.length;
}



myButton.addEventListener('click',function () {
        let moyenne = numAverage(myTab);
        document.querySelector("p").innerHTML = moyenne;

});



