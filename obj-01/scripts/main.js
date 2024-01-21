let utilisateur = 
    {
        nom: "Martin",
        prénom : "Michèle",
        age: "64",
    };

let nom = utilisateur.nom;
let prénom = utilisateur.prénom;
let age = utilisateur.age;

let texte = prénom + " " + nom ;

document.getElementsByTagName("h1")[0].innerHTML = texte;
document.getElementsByTagName("sub")[0].innerHTML = age;