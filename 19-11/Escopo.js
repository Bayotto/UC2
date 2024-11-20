//const nome = "Leo"

function imprimeFrase(){
    const nome = "Leonardo"
    console.log(`Ola ${nome}, tudo bem?`)
    function imprimeEcalcula(){
        const number1 = 2
        const number2 = 5
        console.log(`Ola ${nome}, o resultado da soma é ${number1 + number2}`)
    }
    imprimeEcalcula()
}

imprimeFrase()