class heroi{
    constructor(nome, idade, classe, tipoAtaque){
        this.nome = nome
        this.idade = idade
        this.classe = classe
        this.tipoAtaque = tipoAtaque

        if(this.classe === "Guerreiro"){
            this.tipoAtaque = "Usou Espada! "
        }else if(this.classe === "Mago"){
            this.tipoAtaque = "Usou Magia! "
        }else if(this.classe === "Monge" ){
            this.tipoAtaque = "Usou artes marciais! "
        }else if(this.classe === "Ninja"){
            this.tipoAtaque = "Usou shuriken! "
        }

    }

    escrever(){
        console.log(`O heroi ${this.nome} que é da classe ${this.classe} realizou um ataque e ${this.tipoAtaque}`)
    }
}
 
let newGuerreiro = new heroi("Nauba98", 20, "Guerreiro")

let newMago = new heroi("TonTon" , 24, "Mago")

let newNinja = new heroi("Mukila", 22, "Ninja")

let newMonge = new heroi("Drew", 28, "Monge")

newGuerreiro.escrever()
newMago.escrever()
newMonge.escrever()
newNinja.escrever()

    