function calcular(){

    let element = document.getElementById('result');

    let lala = "<ul>"
    for(let i = 1; i < 500; i++){
        if((i % 5) === 0){
            lala += `<li> Valor: ${i} </li>` 
        }
    }
    lala += "</ul>";

    element.innerHTML = lala;

}