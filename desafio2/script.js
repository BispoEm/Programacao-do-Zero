

let saldov = 0
let nivel = "Indefinido"
let vitorias = 102
let derrotas = 101

function calcularRanking(v,d){
    saldoVitorias = v-d;
    while(nivel=="Indefinido"){
        if(v<=10){
            return nivel = "Ferro"
        } else if(v>=11 && v<=20){
            return nivel = "Bronze"
        } else if(v>=21 && v<=50){
            return nivel = "Prata"
        } else if(v>=51 && v<=80){
            return nivel = "Ouro"
        } else if(v>=81 && v<=90){
            return nivel = "Diamante"
        } else if(v>=91 && v<=100){
            return nivel = "Lendário"
        } else if(v>=101){
            return nivel = "Imortal"
        } else{
            return nivel = "Indefinido"
        }
    }
}

calcularRanking(vitorias,derrotas);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
