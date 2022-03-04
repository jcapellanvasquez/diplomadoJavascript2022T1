window.addEventListener('load', function(event) {
    const tipos = [
        { name: "Pago quincena", type: "ingresos" },
        { name: "Dieta quincena", type: "ingresos" },
        { name: "Otros", type: "ingresos" }
    ]
   
    const listadoGastos = document.querySelector('#listado-tipos');

    for (let i=0; i < tipos.length; i++) {
        const tipo = tipos[i];
       listadoGastos.innerHTML = listadoGastos.innerHTML +
       `
        <option value="">${tipo.name}</option>
       `;     
    }
})
