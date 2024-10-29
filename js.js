function buscarTopico() {
    
    const pesquisa = document.getElementById("campoPesquisa").value.toLowerCase();
    
    const topicos = {
        "sobre": "sobre",
        "espécies": "especies",
        "mamíferos": "mamiferos",
        "aves": "aves",
        "répteis": "répteis",
        "biodiversidade": "biodiversidade",
        "animais-extintos": "animais-extintos",
        "contato": "contato"
    };

    // Verifica se o tópico existe e navega até ele
    if (topicos[pesquisa]) {
        location.href = "#" + topicos[pesquisa]; // como se fosse a ancora de link que e usado na tag A.
    } else {
        alert("Tópico não encontrado.");
    }
    
}

