
//função puxando um onload que está no body do HTML
function carregar() { 
    //capturando os elementos do DOM
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    //condição composta com if, else if e else
    if(hora >= 0 && hora < 12){

        //bom dia ! 
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'

    }else if(hora > 12 && hora <=18){

        // boa tarde !
        img.src = 'fototarde.png'
        document.body.style.background ='#b9846f'

    }else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}


