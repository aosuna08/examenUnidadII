const valorAuto = document.getElementById("valorAuto")
const planCredito = document.getElementById("planCredito")
const enganche = document.getElementById("enganche")
const txtPagoInicial = document.getElementById("pagoInicial")
const txtTotalAFinanciar = document.getElementById("totalAFinanciar")
const txtPagoMensual = document.getElementById("pagoMensual")
const btnCalcular = document.getElementById("calcular")

/*
    Calculos :
    Pago Inicial es la cantidad que resulta del porcentaje de enganche del valor del automovil
    Total a financiar : Es la cantidad que resulta del valor del auto – pago Inicial , mas el porcentaje
    de interes
    Pago Mensual : Es el total a financia sobre el numero de meses
*/

function calcular() {
    let pagoInicial = 0.0
    let total = 0.0
    let pagoMensual = 0.0
    let interes = 0.0
    interes = parseFloat(planCredito.value) / 100
    pagoInicial = parseFloat(valorAuto.value) * enganche.value
    total = (parseFloat(valorAuto.value) - pagoInicial) + ((parseFloat(valorAuto.value) - pagoInicial) * interes)
    pagoMensual = total / parseFloat(enganche.value)
    txtPagoInicial.value = pagoInicial
    txtTotalAFinanciar.value = total
    txtPagoMensual.value = pagoMensual.toFixed(2)
}

btnCalcular.addEventListener('click', calcular)