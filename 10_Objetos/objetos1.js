let jogador = {
    nome:'Renato Augusto',
    idade:34,
    numGol:81,
    Gol(g=0){
        console.log('Renato fez gol!')
        this.numGol += g
    }
}

jogador.posicap = 'Meio Campo'
console.log(jogador)