// Laço switch case

function repetidor(n1){

    switch(n1){
        case 1: console.log('Nintendo é o melhor')
        window.location.replace("Nintendo.html");
        break
        
        case 2: console.log('Atari é o mais antigo')
        window.location.replace("Atari.html");
        break 
    
        case 3: console.log('Xbox é superior ao melhor')
        window.location.replace("Xbox.html");
        break 
    
        case 4: console.log('PlayStatiom é paia')
        window.location.replace("PlayStation.html");
        break 
    
        default:
            console.log('Não atende nenhuma condição')
            //window.location.replace("cadastro.html");
            window.location.assign("cadastro.html")
    }

    }


    function retorna(){


        let b = document.getElementById("nivel").value
        repetidor(parseInt(b))



    }