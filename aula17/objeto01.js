let amigo = {nome: 'camila', sexo: 'f', peso: 52 ,
engordar(p=0) {
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)