const ingredientes = [
    { codigo: '000ALB', nombre: 'Prep. Sabor Albondigón (6010)', t: '', precio: '8.249,9', gra: '', proC: '', proT: '50,10', hum: '30,00', sal: '3,00', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000BUT', nombre: 'Prep. Sabor Butifarra (5800)', t: '', precio: '', gra: '', proC: '', proT: '83,40', hum: '12,00', sal: '', fos: '', eri: '', no2: '1,00', alm: '' },
    { codigo: '000CAB', nombre: 'Prep. Sabor Cabano (5900)', t: '', precio: '7.576,0', gra: '', proC: '', proT: '63,00', hum: '30,00', sal: '3,50', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000CER', nombre: 'Prep. Sabor Cervecero (7001)', t: '', precio: '7.905,4', gra: '', proC: '', proT: '61,70', hum: '30,00', sal: '4,30', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000CHA', nombre: 'Prep. Sabor Chorizo Ant. (7100)', t: '', precio: '7.537,7', gra: '', proC: '', proT: '70,90', hum: '20,00', sal: '2,50', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000CHE', nombre: 'Prep. Sabor Chorizo Esp. (7101)', t: '', precio: '7.156,0', gra: '', proC: '', proT: '62,30', hum: '30,00', sal: '3,50', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000FRA', nombre: 'Prep. Sabor SHA Frankfurt  (7700)', t: '', precio: '8.883,3', gra: '', proC: '', proT: '49,40', hum: '25,50', sal: '2,00', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000GEN', nombre: 'Prep. Sabor Génova  (5805)', t: '', precio: '9.930,8', gra: '', proC: '', proT: '54,00', hum: '20,00', sal: '2,50', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000HAM', nombre: 'Prep. Sabor Hamburguesa (7200)', t: '', precio: '5.554,1', gra: '', proC: '', proT: '63,00', hum: '35,00', sal: '', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000JAC', nombre: 'Prep. Sabor Jamón California (7300)', t: '', precio: '5.997,2', gra: '', proC: '', proT: '48,00', hum: '', sal: '', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000JAM', nombre: 'Prep. Sabor Jamón 000JAM (7301)', t: '', precio: '14.772,6', gra: '', proC: '', proT: '92,30', hum: '', sal: '', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000JDA', nombre: 'Prep. Sabor Jamonada (7500)', t: '', precio: '7.431,0', gra: '', proC: '', proT: '64,10', hum: '30,00', sal: '3,50', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000LON', nombre: 'Prep. Sabor Longaniza (7123)', t: '', precio: '7.919,3', gra: '', proC: '', proT: '63,20', hum: '30,00', sal: '3,50', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000MOL', nombre: 'Prep. Sabor Carne Molida (6000)', t: '', precio: '9.289,3', gra: '', proC: '', proT: '50,00', hum: '', sal: '', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000MRC', nombre: 'Prep. Sabor Morcilla (7400)', t: '', precio: '8.171,0', gra: '', proC: '', proT: '51,30', hum: '3,00', sal: '', fos: '', eri: '', no2: '', alm: '12,40', cra: '1,00' },
    { codigo: '000MRT', nombre: 'Prep. Sabor Mortadela 000 (7505)', t: '', precio: '6.010,0', gra: '', proC: '', proT: '69,00', hum: '25,50', sal: '3,60', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000PER', nombre: 'Prep. Sabor SHA Super Perro (7701)', t: '', precio: '6.806,9', gra: '', proC: '', proT: '64,50', hum: '30,00', sal: '3,50', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000RAN', nombre: 'Prep. Sabor SHA Campesina (7744)', t: '', precio: '8.626,9', gra: '', proC: '', proT: '59,30', hum: '31,00', sal: '3,60', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000SAL', nombre: 'Salmuera Univ. (5601)', t: '', precio: '4.080,9', gra: '', proC: '', proT: '60,10', hum: '35,00', sal: '3,20', fos: '0,90', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000SAM', nombre: 'Prep. Sabor Salami (7600)', t: '', precio: '8.166,4', gra: '', proC: '', proT: '62,70', hum: '30,00', sal: '3,50', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000SHA', nombre: 'Prep. Sabor Salchicha (7702)', t: '', precio: '5.291,9', gra: '', proC: '', proT: '74,60', hum: '20,00', sal: '3,50', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000SHN', nombre: 'Prep. Sabor Salchichón (7900)', t: '', precio: '7.360,0', gra: '', proC: '', proT: '64,00', hum: '30,00', sal: '3,50', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000SUI', nombre: 'Prep. Sabor SHA Suiza (7703)', t: '', precio: '9.106,0', gra: '', proC: '', proT: '57,40', hum: '35,00', sal: '3,50', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000UNI', nombre: 'Prep. Sabor Universal (8300)', t: '', precio: '6.385,8', gra: '', proC: '', proT: '68,80', hum: '25,00', sal: '3,50', fos: '', eri: '', no2: '', alm: '1,00', cra: '' },
    { codigo: '000VIE', nombre: 'Prep. Sabor SHA Viena (7765)', t: '', precio: '7.773,4', gra: '', proC: '', proT: '58,30', hum: '25,00', sal: '2,00', fos: '', eri: '', no2: '', alm: '1,00', cra: '' }
];
    


let currentPage = 1;
const rowsPerPage = 8;
let editingIndex = null;

function displayTableData(page) {
    const tableBody = document.querySelector('#ingredientesTable tbody');
    tableBody.innerHTML = '';

    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedItems = ingredientes.slice(startIndex, endIndex);

    paginatedItems.forEach((item, index) => {
        const row = `
            <tr>
                <td>${item.codigo}</td>
                <td>${item.nombre}</td>
                <td>${item.t}</td>
                <td>${item.precio}</td>
                <td>${item.gra}</td>
                <td>${item.proC}</td>
                <td>${item.proT}</td>
                <td>${item.hum}</td>
                <td>${item.sal}</td>
                <td>${item.fos}</td>
                <td>${item.eri}</td>
                <td>${item.no2}</td>
                <td>${item.alm}</td>
                <td>${item.cra}</td>
                <td>
                    <button class="edit-button" data-index="${startIndex + index}">Editar</button>
                    <button class="delete-button">Eliminar</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    document.getElementById('pageDisplay').textContent = page;

    // Añadir eventos para los botones de editar
    document.querySelectorAll('.edit-button').forEach(button => {
        button.addEventListener('click', handleEditButtonClick);
    });
}

function handleNextPage() {
    const totalPages = Math.ceil(ingredientes.length / rowsPerPage);
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

// Modal para agregar ingredientes
const modal = document.getElementById('ingredientModal');
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

document.getElementById('ingredientForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const proT = document.getElementById('proT').value;
    const hum = document.getElementById('hum').value;
    const sal = document.getElementById('sal').value;
    const fos = document.getElementById('fos').value;
    const alm = document.getElementById('alm').value;

    const newItem = { codigo, nombre, t: '', precio, gra: '', proC: '', proT, hum, sal, fos, eri: '', no2: '', alm, cra: '' };
    ingredientes.push(newItem);
    
    displayTableData(currentPage);

    modal.style.display = "none";
});

// Modal para editar ingredientes
const editModal = document.getElementById('editIngredientModal');
const closeEditModalBtn = document.getElementsByClassName('close-edit')[0];

closeEditModalBtn.onclick = function() {
    editModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === editModal) {
        editModal.style.display = "none";
    }
}

function handleEditButtonClick(e) {
    const index = e.target.dataset.index;
    editingIndex = index;

    const ingrediente = ingredientes[index];

    document.getElementById('editCodigo').value = ingrediente.codigo;
    document.getElementById('editNombre').value = ingrediente.nombre;
    document.getElementById('editPrecio').value = ingrediente.precio;
    document.getElementById('editProT').value = ingrediente.proT;
    document.getElementById('editHum').value = ingrediente.hum;
    document.getElementById('editSal').value = ingrediente.sal;
    document.getElementById('editFos').value = ingrediente.fos;
    document.getElementById('editAlm').value = ingrediente.alm;

    editModal.style.display = "block";
}

document.getElementById('editIngredientForm').addEventListener('submit', function(e) {
    e.preventDefault();

    ingredientes[editingIndex] = {
        codigo: document.getElementById('editCodigo').value,
        nombre: document.getElementById('editNombre').value,
        t: '',
        precio: document.getElementById('editPrecio').value,
        gra: '',
        proC: '',
        proT: document.getElementById('editProT').value,
        hum: document.getElementById('editHum').value,
        sal: document.getElementById('editSal').value,
        fos: document.getElementById('editFos').value,
        eri: '',
        no2: '',
        alm: document.getElementById('editAlm').value,
        cra: ''
    };

    displayTableData(currentPage);

    editModal.style.display = "none";
});
