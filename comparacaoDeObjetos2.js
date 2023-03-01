function Robo(nome, funcao){      // <--- nós temos uma fução que facilita a construção do objeto
    this.nome = nome;
    this.funcao = funcao;           // <--- os parametros da função vão funcionar como os atributos do futuro objeto que irá ser criado 
}




let robo1 = new Robo('teste', 'catador de lixo')   
let robo2 = new Robo('teste', 'catador de lixo')   




console.log(robo1 === robo2);  // <--- foi feito uma comparação para saber se os dois objetos são iguais

let robo3 = robo1

console.log(robo1 === robo3);  // <--- aqui é usado mais um console.log para a verificação dos objetos 