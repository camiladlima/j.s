function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    // length é quantas letras tem dentro
    // se o inicio tiver vazio
    if (ini.value.length == 0 || fim.value.length == 0) {
        window.alert('[ERRO] faltam dados')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f){
            // contagem crescente
            for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
            // se cooloca um emoji em js usando o \u{e o codigo}
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            // contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
        
        
    }
}