let var1 = "Salut, je m'",
    var2 = "appelle Charles-Henri du Pré,",
    var3 = " j'habite à Neuilly dans un quartier mal paumé.";

//let joined = var1 + var2 + var3;
let joined = `${var1} ${var2} ${var3}`;

document.querySelector('p').innerHTML = joined;