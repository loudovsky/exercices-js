let users = [
    {
        id: "user1",
        nom: "Martin",
        age: 28,
        profession: "Ingénieur Logiciel",
        compétences: ["Java", "Python", "Docker"],
        adresse: {
            rue: "10 Rue de l'Innovation",
            ville: "Lyon",
            codePostal: "69000"
        }
    },
    {
        id: "user2",
        nom: "Durand",
        age: 35,
        profession: "Designer Graphique",
        compétences: ["Photoshop", "Illustrator", "InDesign"],
        adresse: {
            rue: "55 Avenue de la Créativité",
            ville: "Marseille",
            codePostal: "13000"
        }
    },
    {
        id: "user3",
        nom: "Lefebvre",
        age: 40,
        profession: "Analyste de Données",
        compétences: ["SQL", "R", "Tableau"],
        adresse: {
            rue: "20 Rue des Données",
            ville: "Nantes",
            codePostal: "44000"
        }
    }
];

for (let i = 0; i < users.length; i++) {
    document.querySelector(".wrapper").innerHTML += `
    <h3>${users[i].nom}</h3>
    <p>${users[i].age} ans</p>
    <p>${users[i].profession}</p>
    <p>${users[i].adresse.rue}, ${users[i].adresse.ville}, ${users[i].adresse.codePostal}</p>
    `
}