function marte(){

    let g_tierra = 9.8;
        let g_marte = 3.7;
        let g_jupiter = 24.8;
    
        let peso_usuario = document.getElementById("marte").value;
        let peso_final;
        peso_final = peso_usuario * g_marte / g_tierra;
        peso_final = parseInt(peso_final);
    let cuadrito=document.getElementById("resultado");
    cuadrito.innerHTML=peso_final}
    console.log("si conecta");