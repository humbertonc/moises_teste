/*
Abaixo de 17          Muito abaixo do peso
Entre 17 e 18,49      Abaixo do peso
entre 18,5 e 24,99    Peso normal
entre 25 e 29,99      Acima do peso
*/
//   imc = peso/(altura*altura)


function calcular(){
    func = document.getElementById('funcao').value;
    
    if(func.lenght > 10){
        console.log('alo')
        resultado = document.getElementById('resultado');
        window.location.href = "image.html";
        return false
    }else{
        resultado = document.getElementById('resultado');
        resultado.innerHTML = ' ';
        console.log('else')
        return false;
    }
}