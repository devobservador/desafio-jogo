class jogo{
  constructor(nome,idade,tipo){
      this.nome=nome
      this.idade=idade
      this.tipo=tipo
      
  }
  atack(){
    let ataque=''
    if(this.tipo==this.ataque){
      ataque='espada'
      
    } else if(this.tipo==this.ataque){
      ataque='magia'

    } else if(this.tipo==this.ataque){
       ataque = 'shuriken'
    }
    console.log(`o heroi é ${this.nome} ${this.tipo} e tem aque de ${this.ataque}`)
  }  
}
let game= new jogo('sieg','200-anos','guerreiro')
let game1= new jogo ('dio','300-anos de idade','mago')
let game2= new jogo('lass','20 -anos de idade','ninja')

game.attack()
game.atack1()
game.atack2()
  
  
  
  