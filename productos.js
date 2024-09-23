const productos = [
    { codigoProducto: '001', nombreProducto: 'Chorizo Costeño', composicion: 'Carne de Cerdo, Carne de Res, Tocino, Agua, Sal, Ajo, Cebolla en Rama, Comino' },
    {
        codigoProducto: '002',
        nombreProducto: 'Salchicha Patrón Harina de Maíz 2',
        composicion: 'Tocino, Pasta de Pollo, Emulsion De Cueros, Res 90/10, Nitritos, Sal Refinada, Almidón de Yuca (854), Proteína Promine (1306), Mezcla Polifosfatos (801), Prep. Sabor Salchicha NEO. (7713), PVH M 1222 (1902), Eritorbato Sodio (240), Conservante Inbac (607), Agua Fría, Carmin Natural, Humo Liq. Poly 8.5 (1803)'
    }
];

let ingredientes = [
    { codigo: '001', nombre: 'Carne de Cerdo' },
    { codigo: '002', nombre: 'Carne de Res' },
    { codigo: '003', nombre: 'Tocino' },
    { codigo: '004', nombre: 'Agua' },
    { codigo: '005', nombre: 'Sal Refinada' },
    { codigo: '006', nombre: 'Cebolla en Rama' },
    { codigo: '007', nombre: 'Ajo' },
    { codigo: '008', nombre: 'Comino' },
    { codigo: '009', nombre: 'Aji en Polvo' },
    { codigo: '010', nombre: 'Proteina Aislada' },
    { codigo: '011', nombre: 'Mezcla Polifosfatos (801)' },
    { codigo: '012', nombre: 'Nitral - Sal Curante (5700)' },
    { codigo: '013', nombre: 'Humo Poly' },
    { codigo: '014', nombre: 'Ascorban' },
    { codigo: '015', nombre: 'Pasta de Pollo' },
    { codigo: '016', nombre: 'Emulsion De Cueros' },
    { codigo: '017', nombre: 'Res 90/10' },
    { codigo: '018', nombre: 'Nitritos' },
    { codigo: '019', nombre: 'Almidón de Yuca (854)' },
    { codigo: '020', nombre: 'Proteína Promine (1306)' },
    { codigo: '021', nombre: 'Prep. Sabor Salchicha NEO. (7713)' },
    { codigo: '022', nombre: 'PVH M 1222 (1902)' },
    { codigo: '023', nombre: 'Eritorbato Sodio (240)' },
    { codigo: '024', nombre: 'Conservante Inbac (607)' },
    { codigo: '025', nombre: 'Agua Fría' },
    { codigo: '026', nombre: 'Carmin Natural' },
    { codigo: '027', nombre: 'Humo Liq. Poly 8.5 (1803)' }
];

let currentPage = 1;
const rowsPerPage = 5;
let selectedIngredientes = [];

// Función para mostrar los productos en la tabla
function displayTableData(page) {
    const tableBody = document.querySelector('#productosTable tbody');
    tableBody.innerHTML = '';

    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedItems = productos.slice(startIndex, endIndex);

    paginatedItems.forEach(item => {
        const row = `
            <tr>
                <td>${item.codigoProducto}</td>
                <td>${item.nombreProducto}</td>
                <td>${item.composicion}</td>
                <td>
                    <button class="edit-button">Editar</button>
                    <button class="delete-button">Eliminar</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    document.getElementById('pageDisplay').textContent = page;
}

function handleNextPage() {
    const totalPages = Math.ceil(productos.length / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayTableData(currentPage);
    }
}

function handlePrevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayTableData(currentPage);
    }
}

document.getElementById('nextPage').addEventListener('click', handleNextPage);
document.getElementById('prevPage').addEventListener('click', handlePrevPage);

// Inicializa la tabla con la primera página
displayTableData(currentPage);

// Modal para agregar productos
const modal = document.getElementById('productModal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementsByClassName('close')[0];

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Función para buscar ingredientes
document.getElementById('buscarIngrediente').addEventListener('click', function() {
    const searchTerm = document.getElementById('ingredienteBuscar').value.toLowerCase();
    const foundIngredient = ingredientes.find(ingrediente => 
        ingrediente.codigo.toLowerCase() === searchTerm || 
        ingrediente.nombre.toLowerCase().includes(searchTerm)
    );

    if (foundIngredient) {
        selectedIngredientes.push(foundIngredient.nombre);
        updateIngredientesList();
    } else {
        alert('Ingrediente no encontrado');
    }

    document.getElementById('ingredienteBuscar').value = '';
});

// Función para actualizar la lista de ingredientes seleccionados
function updateIngredientesList() {
    const ingredientesList = document.getElementById('ingredientesList');
    ingredientesList.innerHTML = '';
    selectedIngredientes.forEach(ingrediente => {
        const li = document.createElement('li');
        li.textContent = ingrediente;
        ingredientesList.appendChild(li);
    });
}

// Función para agregar un nuevo producto
document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const codigoProducto = document.getElementById('codigoProducto').value;
    const nombreProducto = document.getElementById('nombreProducto').value;
    const composicionProducto = document.getElementById('composicionProducto').value;

    const newItem = {
        codigoProducto,
        nombreProducto,
        composicion: selectedIngredientes.join(', ')
    };

    productos.push(newItem);
    
    displayTableData(currentPage);

    modal.style.display = "none";
    document.getElementById('productForm').reset();
    selectedIngredientes = [];
    updateIngredientesList();
});
