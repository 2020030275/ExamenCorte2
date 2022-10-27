function change(){

    let opc1 = document.getElementById('monedaOrigen').value
    let opc2 = document.getElementById('monedaDestino').value

    let origen = document.getElementById('monedaOrigen').options
    let destino = document.getElementById('monedaDestino').options

   

    let lista = [
        {
            text: '-- Moneda Destino --',
            value: ''
        },
        {
            text: 'Peso Mexicano',
            value: 'mxn'
        },
        {
            text: 'Dólar Americano',
            value: 'da'
        },
        {
            text: 'Dólar Canadiense',
            value: 'dc'
        },
        {
            text: 'Euro',
            value: 'eur'
        },
    ]

    let listaSINMXN = [
        {
            text: '-- Moneda Destino --',
            value: ''
        },
        {
            text: 'Dólar Americano',
            value: 'da'
        },
        {
            text: 'Dólar Canadiense',
            value: 'dc'
        },
        {
            text: 'Euro',
            value: 'eur'
        },
    ]

    let listaSINDA = [
        {
            text: '-- Moneda Destino --',
            value: ''
        },
        {
            text: 'Peso Mexicano',
            value: 'mxn'
        },
        {
            text: 'Dólar Canadiense',
            value: 'dc'
        },
        {
            text: 'Euro',
            value: 'eur'
        },
    ]

    let listaSINDC = [
        {
            text: '-- Moneda Destino --',
            value: ''
        },
        {
            text: 'Peso Mexicano',
            value: 'mxn'
        },
        {
            text: 'Dólar americano',
            value: 'da'
        },
        {
            text: 'Euro',
            value: 'eur'
        },
    ]

    let listaSINEURO = [
        {
            text: '-- Moneda Destino --',
            value: ''
        },
        {
            text: 'Peso Mexicano',
            value: 'mxn'
        },
        {
            text: 'Dólar americano',
            value: 'da'
        },
        {
            text: 'Dólar canadiense',
            value: 'dc'
        }
    ]

    

    if(opc1 == 'mxn'){

        
        for (let i = 0; i <= 3; i++) {
            

            destino[i] = new Option(listaSINMXN[i].text, listaSINMXN[i].value)
            
        }
        destino.remove(4)
        
    }else if(opc1 == 'da'){
        for (let i = 0; i < 4; i++) {
            destino[i] = new Option(listaSINDA[i].text, listaSINDA[i].value)
            
        }
        destino.remove(4)
    }else if(opc1 == 'dc'){
        for (let i = 0; i < 4; i++) {
            destino[i] = new Option(listaSINDC[i].text, listaSINDC[i].value)
            
        }
        destino.remove(4)
    }else if(opc1 == 'eur'){
        for (let i = 0; i < 4; i++) {
           destino[i] = new Option(listaSINEURO[i].text), listaSINEURO[i].value
            
        }
        destino.remove(4)
    }
    else if(opc1 == ''){
        for (let i = 0; i <= 4; i++) {
            destino[i] = new Option(lista[i].text, lista[i].value)
            
        }
    }

}

function calcular(){

    let cantidad = document.getElementById('cantidad').value
    let monedaOrigen = document.getElementById('monedaOrigen').value
    let monedaDestino = document.getElementById('monedaDestino').value

    let total = 0

    // Dólar americano
    if(monedaOrigen == 'da' && monedaDestino == 'mxn'){
        total = (cantidad * 19.85)
    }else if(monedaOrigen == 'da' && monedaDestino == 'dc'){
        total = cantidad * 1.35
    }else if(monedaOrigen == 'da' && monedaDestino == 'eur'){
        total = cantidad * 0.99
    }

    //Dólar canadiense
    if(monedaOrigen == 'dc' && monedaDestino == 'mxn'){
        total = (cantidad / 1.35)
        total = (total*19.85)
    }else if(monedaOrigen == 'dc' && monedaDestino == 'da'){
        total = cantidad / 1.35
    }else if(monedaOrigen == 'dc' && monedaDestino == 'eur'){
        total = cantidad /1.35
        total = total * 0.99
    }

    // Peso Mexicano
    if(monedaOrigen == 'mxn' && monedaDestino == 'da'){
        total = (cantidad / 19.85)
    }else if(monedaOrigen == 'mxn' && monedaDestino == 'dc'){
        total = cantidad / 19.85
        total = total * 1.35
    }else if(monedaOrigen == 'mxn' && monedaDestino == 'eur'){
        total = (cantidad / 19.85)
        total = total * 0.99
    }

    //Euro
    if(monedaOrigen == 'eur' && monedaDestino == 'mxn'){
        total = (cantidad * .99)
        total = (total*19.85)
    }else if(monedaOrigen == 'eur' && monedaDestino == 'da'){
        total = cantidad * 0.99
    }else if(monedaOrigen == 'eur' && monedaDestino == 'dc'){
        total = cantidad * 0.99
        total = total * 1.35
    }

    let subtotal = total
    let totalCom = subtotal * 0.03
    let totalPagar = (subtotal - totalCom)

    let subTexto = document.getElementById('subtotal');
    let tComTexto = document.getElementById('totalComision');
    let tPagTexto = document.getElementById('totalPagar');

    subTexto.innerHtml =  subTexto.setAttribute("value", subtotal)
    tComTexto.innerHtml =  tComTexto.setAttribute("value", totalCom)
    tPagTexto.innerHtml =  tPagTexto.setAttribute("value", totalPagar)


}