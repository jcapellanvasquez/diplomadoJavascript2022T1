window.addEventListener('load', function(event) {
    const data = getData();
    const listado = document.querySelector("#listado");

    for(let i=0; i < data.length; i++) {
        const tran = data[i];
        listado.innerHTML = listado.innerHTML +
        `
         <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${tran.type}</h5>
            <small class="text-muted">${new Date(+tran.fecha_registro)}</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-muted">And some muted small print.</small>
        </a>
        `;
    }
})

