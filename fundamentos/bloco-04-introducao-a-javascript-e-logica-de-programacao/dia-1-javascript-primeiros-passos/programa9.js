let angulo1 = 90;
let angulo2 = 40;
let angulo3 = 50;

let somaAngulos = angulo1 + angulo2 + angulo3;

let todosAngulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (todosAngulosPositivos) {
    if (somaAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('Erro: ângulo inválido');
}