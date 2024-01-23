var d = new Date() ;
var day = d.getDay();
var hours = d.getHours();
var minutes = d.getMinutes();

var daysOfWeek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var texte = `On est ${daysOfWeek[day]}. Il est ${hours}h et ${minutes} minute(s)`;

document.querySelector("p").innerHTML = texte;