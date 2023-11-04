class heroi{
    nome
    idade
    tipo
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque
        }

    // getter
    getTipo(){
        return this.tipo
    }

    // metodos
    atacar(){
        switch (this.tipo) {
            case "mago":
                this.ataque = "magia"
                break;
            case "guerreiro":
                this.ataque = "espada"
                break;
            case "monge":
                this.ataque = "artes marciais"
                break;
            case "ninja":
                this.ataque = "shuriken"
                break;
            default:
                console.log('tipo não identificado')
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
}

let GuerreiroBispo = new heroi("Bispo",17,"guerreiro")

GuerreiroBispo.atacar();