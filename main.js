const divForTime = document.querySelector('.container-relogio div');

const data = new Date('May 20, 2023')

const brazilianTime = constructorDate(data)
divForTime.innerHTML = brazilianTime

function constructorDate(data) {
    
    let day = data.getDate()
    let hora = formatDate(data.getHours())
    let minuto = formatDate(data.getMinutes())
    let segundo = formatDate(data.getSeconds())

    let format = `<h1>${day}<p>Dias</p></h1>:<h1>${hora}<p>Horas</p></h1>:<h1>${minuto}<p>Minutos</p></h1>:<h1>${segundo}<p>Segundos</p></h1>`

    return format
}

function formatDate(valor) {
    valor = valor < 10 ? '0' + valor : valor;
    return valor
}

setInterval(function () {
    const data = new Date()
    const brazilianTime = constructorDate(data)
    divForTime.innerHTML = brazilianTime
}, 1000)