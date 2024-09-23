    // Simulación de productos e ingredientes para generar datos de reportes
    const productos = [
        { codigo: '001', nombre: 'Chorizo Costeño', ingredientes: ['Prep. Sabor Cabano', 'Prep. Sabor Chorizo Ant.'], costoTotal: 15000, proteina: 20, grasa: 15, humedad: 10 },
        { codigo: '002', nombre: 'Salchicha Patrón Harina de Maíz 2', ingredientes: ['Prep. Sabor Chorizo Ant.', 'Prep. Sabor Cervecero'], costoTotal: 18000, proteina: 25, grasa: 18, humedad: 12 }
    ];

    // Función para generar el reporte basado en los filtros
    document.getElementById('generarReporte').addEventListener('click', function() {
        generarGraficoCostos();
        generarGraficoComposicion();
        generarResumenProductos();
    });

    // Gráfico de evolución de costos
    function generarGraficoCostos() {
        const ctx = document.getElementById('costosChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
                datasets: [{
                    label: 'Costo de Ingredientes',
                    data: [12000, 15000, 13000, 16000],
                    borderColor: '#004b8d',
                    fill: false,
                    tension: 0.4 // Curva suave
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function(tooltipItem) {
                                return `Costo: $${tooltipItem.raw}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Gráfico de comparación de composición
    function generarGraficoComposicion() {
        const ctx = document.getElementById('composicionChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Proteína', 'Grasa', 'Humedad'],
                datasets: [{
                    label: 'Chorizo Costeño',
                    data: [20, 15, 10],
                    backgroundColor: '#4e73df',
                    hoverBackgroundColor: '#2e59d9'
                },
                {
                    label: 'Salchicha Patrón',
                    data: [25, 18, 12],
                    backgroundColor: '#1cc88a',
                    hoverBackgroundColor: '#17a673'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        onClick: function(e, legendItem) {
                            const index = legendItem.datasetIndex;
                            const chart = this.chart;
                            const meta = chart.getDatasetMeta(index);
                            meta.hidden = meta.hidden === null ? !chart.data.datasets[index].hidden : null;
                            chart.update();
                        }
                    },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function(tooltipItem) {
                                return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Generar tabla resumen de productos
    function generarResumenProductos() {
        const tableBody = document.getElementById('resumenProductos');
        tableBody.innerHTML = '';

        productos.forEach(producto => {
            const row = `
                <tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.ingredientes.join(', ')}</td>
                    <td>${producto.costoTotal}</td>
                    <td>${producto.proteina}%</td>
                    <td>${producto.grasa}%</td>
                    <td>${producto.humedad}%</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }
