// let jogador ={
//     nome:'Neymar',
//     posicao:'Atacente',
//     numGols:400
// }

class jogador{
    constructor(nome, posicao,numGol){
        this.nome= nome
        this.posicao = posicao
        this.numGol = numGol
    }
    golsMarcados(){
        console.log(` O ${this.nome} ja marcou ${this.numGol} gols em sua carreira`)
    }
}

const Neymar = new jogador('Neymar','Atacente',400)
Neymar.golsMarcados()