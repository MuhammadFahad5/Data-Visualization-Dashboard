const lineData = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [{
        label: 'Sample Line Chart',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#41D4A8', // Changing line color to blue
        borderWidth: 2,
        pointRadius: 0, // Removing dots from the line
        data: [10000, 12000, 20000, 15000, 30000, 22000, 40000],
    }]
};

// Line chart options
const lineOptions = {
    plugins: {
        legend: {
            display: false, // Hide legend
        },
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Create the line chart
const ctxLine = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
    type: 'line',
    data: lineData,
    options: lineOptions
});