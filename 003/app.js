function Contagem(){
    //enquanto
    let contador = 0 
    while(contador <= 100){
        document.getElementById("resposta").innerHTML += "Número " + contador + "<br>"
        contador = contador + 2
    }   
}