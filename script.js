function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('manha')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'manha.png.jpg'
        document.body.style.background = (91, 156, 241);
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'tarde.png.jpg'
        document.body.style.background = 'purple'
    }else {
        //BOA NOITE
        img.src='noite.png.jpg'
        document.body.style.background = '#041e28'
    }

}