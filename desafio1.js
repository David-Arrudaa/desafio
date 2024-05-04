//Objetivo
//Crie uma variavel para armazenar o nome e a quantidade de XP de um heroi, depois utilize uma
//estrutura de decisão para apresentar alguma das mensagens abaixo:
//se XP for menor do que 1.000 = Ferro
//se xp for entre 1.001 e 2.000 = Bronze
//se xp for entre 2.001 e 5.000 = Prata 
//se o xp for entre 5.001 e 7.000 = Ouro

let heroi = "Thor"
let xp = 1500

if(xp < 1000){
    console.log("O heroi " + heroi + " tem XP de " + xp + " e sua classificação é: Ferro ")
}else if(xp <=2000){
    console.log("O heroi " + heroi + " tem XP de " + xp + " e sua classificação é: Bronze")
}else if(xp <= 5000){
    console.log("O heroi " + heroi + " tem XP de " + xp + " e sua classificação é de: Prata")
}else if(xp >=5001){
    console.log("P heroi " + heroi + " tem xp de " + xp + " e sua classificação é de: Ouro")
}