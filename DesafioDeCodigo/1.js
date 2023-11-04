
const quantidadeGolpes = 5;

let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

for (let i = 1; i <= quantidadeGolpes; i++) {
  let minaIndex = (i-1) % (minerais.length);
  
  // TODO: Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
  console.log(minaIndex);
  console.log("----")
}