window.addEventListener('load', function (event) {
    console.log("Funciono!")


    const miFormulario = document.getElementById('mi-formulario')
    miFormulario.addEventListener('submit', event => {
        event.preventDefault();
        const form = event.target;
        const parrafo = form.elements['parrafo'].value
        const color = form.elements['color'].value
        const redondeado = form.elements['redondeado'].checked
        
        cambiarParrafo(parrafo)
        cambiarColor(color)
        redondear(redondeado)
    })

})

function cambiarParrafo(parrafo) {
    const tagP = document.querySelector('div.box > p')
    tagP.textContent = parrafo
}

function cambiarColor(color) {
    const box = document.querySelector('div.box')
    box.style.backgroundColor = color;
}

function redondear(redondear) {
    const box = document.querySelector('div.box')
    if (redondear) {
        box.classList.add('redondo')
    } else {
        box.classList.remove('redondo')
    }
}