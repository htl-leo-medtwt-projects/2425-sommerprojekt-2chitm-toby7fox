

const ctx = document.getElementById('myChart').getContext('2d');

const labels = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni'];
const data   = [100, 102, 106, 110, 120, 122];


const canvas = document.getElementById('myChart');
canvas.width = data.length * 120;


const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Besucherzahlen',
        data: data,
        pointRadius: 10,
      }]
    },
    options: {
    responsive: false,
      scales: {
        y: {
          ticks: {
            stepSize: 1
          },
          grace: '10%'
        },
      }
    }
});

const jetzt = new Date();
console.log(jetzt.toLocaleDateString());
