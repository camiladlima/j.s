function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0 ) {
        window.alert('por favor digite um numero')
        
    } else {
        let n = Number(num.value)
        let c = 1
        // limpar o select para que não apareça mais de duas multiplicações
        tab.innerHTML = ''
        while (c <= 10 ) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            // appendClild significa adicionar um elemento filho
            c++
        }
    }
    
}