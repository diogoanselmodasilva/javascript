function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora < 12){
            img.src ='midia/fotodopordosol-small.png'
            document.body.style.background ='#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
            img.src='midia/fototarde-small.png'
            document.body.style.background = '#b9846f'
    } else {
        `Boa noite`
        img.src = 'midia/fotonoite-small.png'
        document.body.style.background = '#515154'
    }
}
