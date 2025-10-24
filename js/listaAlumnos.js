const btnMostrar = document.getElementById("mostrarLista")
const btnLimpiar = document.getElementById("limpiarLista")
const tbody = document.getElementById("tbody")
const txtPromedio = document.getElementById("promedioGrupal")
const txtAprobados = document.getElementById("aprobados")
const txtReprobados = document.getElementById("reprobados")

function mostrarLista() {
    fetch('../js/calificaciones.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const row = document.createElement("tr")
            const matricula = document.createElement("td")
            const nombre = document.createElement("td")
            const calificacion = document.createElement("td")
            matricula.textContent = element.matricula
            nombre.textContent = element.nombre
            calificacion.textContent = element.calificacion
            row.appendChild(matricula)
            row.appendChild(nombre)
            row.appendChild(calificacion)
            tbody.appendChild(row)
        });
    })
    .catch(error => console.log("Error: " + console.error))
}

function limpiarLista() {
    tbody.innerHTML = "";
    txtPromedio.innerHTML = "Promedio grupal: 0"
    txtAprobados.innerHTML = "Numero de aprobados: 0"
    txtReprobados.innerHTML = "Numero de reprobados: 0"
}

function promedioGrupal() {
    let contador = 0
    let suma = 0

    fetch('../js/calificaciones.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            suma += element.calificacion
            contador ++
        });
        let resultado = 0
        resultado = suma / contador
    txtPromedio.textContent = "Promedio grupal: " + resultado.toFixed(2)
    })
}

function contar(){
    let aprobados = 0
    let reprobados = 0

    fetch('../js/calificaciones.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            if(element.calificacion >= 7) {
                aprobados++
            } else {
                reprobados++
            }
        });
    txtAprobados.innerHTML = "Numero de aprobados: " + aprobados
    txtReprobados.innerHTML = "Numero de reprobados: " + reprobados
    })
}

btnMostrar.addEventListener('click', mostrarLista)
btnLimpiar.addEventListener('click', limpiarLista)
btnMostrar.addEventListener('click', promedioGrupal)
btnMostrar.addEventListener('click', contar)