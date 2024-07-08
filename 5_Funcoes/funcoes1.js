function presente(dinheiro , valor) {
    if (dinheiro < valor) {
        return 'Não é possivel comprar!'   
    } else{
        return 'Você realmente precisa fazer essa compra?'
    }
    
}

let x = presente(50 ,50 )
console.log(x)