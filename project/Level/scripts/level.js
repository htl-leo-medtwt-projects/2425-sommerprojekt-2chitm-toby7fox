
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
  type: 'bar',                // Diagramm‑Typ
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Umsatz in € × 1 000',
      data: [12, 19, 3, 5]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: { text: 'Quartalsumsatz', display: true }
    }
  }
});
