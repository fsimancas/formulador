// Lista de ingredientes
const ingredientes = [
    { codigo: '000CAB', nombre: 'Prep. Sabor Cabano (5900)', precio: '7.576,0', proT: '63,00', hum: '30,00', sal: '3,50', alm: '1,00' },
    { codigo: '000CHA', nombre: 'Prep. Sabor Chorizo Ant. (7100)', precio: '7.537,7', proT: '70,90', hum: '20,00', sal: '2,50', alm: '1,00' },
    { codigo: '000CER', nombre: 'Prep. Sabor Cervecero (7001)', precio: '7.905,4', proT: '61,70', hum: '30,00', sal: '4,30', alm: '1,00' },
    { codigo: '000FRA', nombre: 'Prep. Sabor SHA Frankfurt (7700)', precio: '8.883,3', proT: '49,40', hum: '25,50', sal: '2,00', alm: '1,00' },
];

// Lista de productos
const productos = [
    { codigoProducto: '001', nombreProducto: 'Chorizo Costeño', composicion: '000CAB, 000CHA, 000CER, 000FRA' },
    { codigoProducto: '002', nombreProducto: 'Salchicha Patrón Harina de Maíz 2', composicion: '000CHA, 000CAB, 000CER' }
];

// Función para buscar y cargar un producto
document.getElementById('buscarProducto').addEventListener('click', function () {
    const searchTerm = document.getElementById('productoBuscar').value.toLowerCase();
    const foundProduct = productos.find(producto =>
        producto.codigoProducto.toLowerCase() === searchTerm ||
        producto.nombreProducto.toLowerCase().includes(searchTerm)
    );

    if (foundProduct) {
        const ingredientesProducto = obtenerIngredientesDeProducto(foundProduct.composicion);
        cargarIngredientes(ingredientesProducto);
        cargarParametrosIngredientes(ingredientesProducto);
    } else {
        alert('Producto no encontrado');
    }
});

// Función para obtener los ingredientes asociados a un producto
function obtenerIngredientesDeProducto(composicion) {
    const ingredientesCodigos = composicion.split(',').map(codigo => codigo.trim());
    return ingredientes.filter(ingrediente => ingredientesCodigos.includes(ingrediente.codigo));
}

// Función para cargar los ingredientes en la tabla
function cargarIngredientes(ingredientes) {
    const tableBody = document.querySelector('#ingredientesTable tbody');
    tableBody.innerHTML = '';

    ingredientes.forEach(ingrediente => {
        const row = `
            <tr>
                <td>${ingrediente.nombre}</td>
                <td><input type="number" class="kg-input" data-ingrediente="${ingrediente.nombre}" value="0"></td>
                <td><input type="text" class="porcentaje"></td>
                <td><input type="text" class="kg-bache"></td>
                <td><input type="text" class="precio-kg" value="${ingrediente.precio || ''}"></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Función para cargar los parámetros de los ingredientes
function cargarParametrosIngredientes(ingredientes) {
    const tableBody = document.querySelector('#parametrosIngredientes tbody');
    tableBody.innerHTML = '';

    ingredientes.forEach(ingrediente => {
        const row = `
            <tr>
                <td>${ingrediente.gra || ''}</td>
                <td>${ingrediente.proT || ''}</td>
                <td>${ingrediente.hum || ''}</td>
                <td>${ingrediente.sal || ''}</td>
                <td>${ingrediente.fos || ''}</td>
                <td>${ingrediente.asc || ''}</td>
                <td>${ingrediente.no2 || ''}</td>
                <td>${ingrediente.alm || ''}</td>
                <td>${ingrediente.ret || ''}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}
