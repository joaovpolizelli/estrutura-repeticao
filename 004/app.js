function Contagem(){
    //enquanto
    let contador = 1
    while(contador <= 100){
        document.getElementById("resposta").innerHTML += "Número " + contador + "<br>"
        contador = contador + 2
    }   
}