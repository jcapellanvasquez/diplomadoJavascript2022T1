function formatearFecha(fecha) {
    const meses = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
    ];
    return `${fecha.getDate()} / ${meses[fecha.getMonth()]}`
}

window.addEventListener('load', function(event) {
    const data = getTransacciones();
    const listado = document.querySelector("#listado");

    for(let i=0; i < data.length; i++) {
        const tran = data[i];
        const fechaRegistro = formatearFecha(new Date(tran.fecha_registro));
        listado.innerHTML = listado.innerHTML +
        `
         <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${tran.cuenta.name}</h5>
            <small class="text-muted">${fechaRegistro}</small>
            </div>
            <p class="mb-1">${tran.notas}</p>
            <small class="text-muted">And some muted small print.</small>
        </a>
        `;
    }
})

