var d = new Date() ;
var day = d.getDay();
var hours = d.getHours();
var minutes = d.getMinutes();

var daysOfWeek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var texte = daysOfWeek[day] + ", " + hours + "h" + minutes;

document.getElementsByTagName("p")[0].innerHTML = texte;