const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed','Thu','Fri'],
    datasets: [
      {
        label: 'Debit',
        backgroundColor: '#1A16F3', // Color for Dataset 1  #1A16F3

        data: [30, 15, 12, 55, 25, 30, 30],
        borderRadius: 10, // Border radius for Dataset 1 bars
      //   barThickness: 40 // Thickness of bars
      //   barPercentage: 0.4 
      },
      {
        label: 'Credit',
        backgroundColor: '#FCAA0B', // Color for Dataset 2
        data: [60, 50, 30, 20, 40, 15, 40],
        borderRadius: 10, // Border radius for Dataset 2 bars
      //   barThickness: 40 // Thickness of bars
      //   barPercentage: 0.4 
      }
    ]
  };

  // Configuration options
  const options = {
    indexAxis: 'x', // Make it vertical
    plugins: {
      legend: {
        position: 'top',
            align: 'start',
            labels: {
              boxWidth: 10, // Adjust the width of the color box
          }
      },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // Create the chart
  const ctx = document.getElementById('doubleVerticalBarChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });