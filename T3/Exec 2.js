function fulano(nome, tempo) {
    var oiFulano= "Olá! Tudo bem, " + nome + "?"
    setInterval(fulano, tempo)
    return oiFulano
}

console.log(fulano("Aldaberto", 5000))