let myTab = [4, 60, 88, 127, 36, 95, 44, 55];
let text = "";

for (let i = 0; i < myTab.length; i++) {
        text += "<li>" + myTab[i] + "</li>"
}

document.getElementsByTagName("ul")[0].innerHTML = text;


