function change(){

    let opc1 = document.getElementById('monedaOrigen').value;
    let opc2 = document.getElementById('monedaDestino').value;

    let origen = document.getElementById('monedaOrigen').options; 
    let destino = document.getElementById('monedaDestino').options;

   

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
            

            destino[i] = new Option(listaSINMXN[i].text, listaSINMXN[i].value);
            
        }
        destino.remove(4)
        
    }else if(opc1 == 'da'){
        for (let i = 0; i < 4; i++) {
            destino[i] = new Option(listaSINDA[i].text, listaSINDA[i].value);
            
        }
        destino.remove(4)
    }else if(opc1 == 'dc'){
        for (let i = 0; i < 4; i++) {
            destino[i] = new Option(listaSINDC[i].text, listaSINDC[i].value);
            
        }
        destino.remove(4)
    }else if(opc1 == 'eur'){
        for (let i = 0; i < 4; i++) {
           destino[i] = new Option(listaSINEURO[i].text), listaSINEURO[i].value;
            
        }
        destino.remove(4)
    }
    else if(opc1 == ''){
        for (let i = 0; i <= 4; i++) {
            destino[i] = new Option(lista[i].text, lista[i].value);
            
        }
    }

}