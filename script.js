// Gráfico de Evolución del Costo de Ingredientes
const costCtx = document.getElementById('costChart').getContext('2d');
const costChart = new Chart(costCtx, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
            label: 'Costo de Ingredientes',
            data: [12000, 15000, 14000, 13000, 16000],
            borderColor: 'rgba(0, 75, 141, 1)',
            fill: false,
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico de Comparaciones de Costos entre Productos
const productCostCtx = document.getElementById('productCostChart').getContext('2d');
const productCostChart = new Chart(productCostCtx, {
    type: 'bar',
    data: {
        labels: ['Producto A', 'Producto B', 'Producto C'],
        datasets: [{
            label: 'Costo de Producto',
            data: [5000, 7000, 6500],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico de Proporciones de Ingredientes
const ingredientPieCtx = document.getElementById('ingredientPieChart').getContext('2d');
const ingredientPieChart = new Chart(ingredientPieCtx, {
    type: 'pie',
    data: {
        labels: ['Ingrediente A', 'Ingrediente B', 'Ingrediente C'],
        datasets: [{
            label: 'Proporciones de Ingredientes',
            data: [40, 35, 25],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
