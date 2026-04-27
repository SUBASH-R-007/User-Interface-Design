const inventoryData = {
    labels: ['Electronics', 'Clothing', 'Home Appliances', 'Books', 'Toys'],
    datasets: [{
        label: 'Items in Stock',
        data: [200, 150, 100, 80, 50],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
    }]
};

// Pie Chart
new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: inventoryData,
    options: {
        responsive: false, // Set to false since you have fixed dimensions in HTML
        plugins: {
            title: { display: true, text: 'Inventory Distribution' }
        }
    }
});

// Bar Chart
new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: inventoryData,
    options: {
        responsive: false,
        plugins: {
            title: { display: true, text: 'Items in Stock by Category' },
            legend: { display: false } // Hides redundant legend for bar charts
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});
