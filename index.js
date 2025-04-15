let herois = [
    { nickname: "Hades", xp: 7200 },
    { nickname: "Anubis", xp: 12000 },
    { nickname: "Zeus", xp: 2500 },
    { nickname: "Poseidon", xp: 9600 }
];

let nickname = "Hades"; // Herói específico
let nivel = "";

// Percorre a lista de heróis
for (let i = 0; i < herois; i++) {
    // Verifica se o nickname corresponde ao herói da lista

    if (herois[i].nickname === nickname) {
        let xp = herois[i]; // Obtém o XP do herói específico

        // Determina o nível baseado no XP
        if (xp < 1000) { 
            nivel = "Ferro"; 
        } else if (xp <= 2000) { 
            nivel = "Bronze"; 
        } else if (xp <= 5000) { 
            nivel = "Prata"; 
        } else if (xp <= 7000) { 
            nivel = "Ouro"; 
        } else if (xp <= 8000) { 
            nivel = "Platina"; 
        } else if (xp <= 9000) { 
            nivel = "Ascendente"; 
        } else if (xp <= 10000) { 
            nivel = "Imortal"; 
        } else { 
            nivel = "Radiante"; 
        }

        
        console.log("O Herói de nome " + nickname + " está no nível de " + nivel)}}