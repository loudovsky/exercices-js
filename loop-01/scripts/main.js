let myTab = [35, 22, 153, 5, 67, 256599];

function numAverage() { 
    let sum = 0;
    for (let i = 0; i < myTab.length; i++) {
        sum += myTab[i]; 
    }
    return sum;
}

let sum = numAverage(myTab);

document.getElementsByTagName("p")[0].innerHTML = sum;