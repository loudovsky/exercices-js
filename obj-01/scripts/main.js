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

document.querySelector(".wrapper h1").innerHTML = texte;
document.querySelector("sub").innerHTML = age;