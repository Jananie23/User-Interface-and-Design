// script.js

// Inventory data
const inventoryData = {
    labels: ['Electronics', 'Clothing', 'Home Appliances', 'Books', 'Toys'],
    datasets: [{
      label: 'Items in Stock',
      data: [200, 150, 100, 80, 50],
      backgroundColor: [
        '#FF6384', // Electronics
        '#36A2EB', // Clothing
        '#FFCE56', // Home Appliances
        '#4BC0C0', // Books
        '#9966FF'  // Toys
      ]
    }]
  };
  
  // Create Pie Chart
  const ctxPie = document.getElementById('pieChart').getContext('2d');
  const pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: inventoryData,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Inventory Distribution'
        }
      }
    }
  });
  
  // Create Bar Chart
  const ctxBar = document.getElementById('barChart').getContext('2d');
  const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: inventoryData,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Items in Stock by Category'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  