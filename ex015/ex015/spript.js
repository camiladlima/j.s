function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') 
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') /*foi criado uma tag img com o id foto em javascrippt, o mesmo que criar a tag em html */
        if (fsex[0].checked) /*se o que for marcado na psição 0 ou seja a primeira opção que é 'Homem' vai ser marcado como homem*/ {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bbmenino.png')
            } else if (idade >= 10 && idade < 21 ) {
                //jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if ( idade < 50 ) {
                //adulto
                img.setAttribute('src', 'homemdulto.png')
            } else {
                //idoso
                img.setAttribute('src', '')
            }
        } else if (fsex[1].checked) /*se for marcado a opção de posição 1 que ~e mulher vai ser marcado como mulher.*/{
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'pexels-julianesanchezfotografia-25636752.jpg')
            } else if (idade >= 10 && idade < 21 ) {
                //jovem
                img.setAttribute('src', 'jovemenina.png')
            } else if ( idade < 50 ) {
                //adulto
                img.setAttribute('src', 'adultamulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        } /*fsex é o nome da variável que se refere ao id dos marcadores */
        res.style.textAlign = 'center' /*posicionando o texto em js */
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` /*vai aparecer aqui */
        res.appendChild(img)/*Vai fazer aperecer a tag img criada em js */
    }
}