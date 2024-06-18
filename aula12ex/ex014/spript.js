function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12 ){
        // BOM DIA
        img.src = 'fotos/manha1.png'
        document.body.style.background = '#fddfb1'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'fotos/tarde1.png'
        document.body.style.background = '#e47d43'
    } else {
        // BOA NOITE
        img.src = 'fotos/noite1.png'
        document.body.style.background = '#3d4c5f' 
    }
        
}
