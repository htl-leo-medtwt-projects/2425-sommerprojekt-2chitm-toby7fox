
let exercise = "Benchpress";
const labels = [];
const data = [];

for (let i = 0; i < exerciseStats.Benchpress.length; i++) {
    for (let k = 0; k < exerciseStats.Benchpress[i].months.length; k++){
        for (let u = 0; u < exerciseStats.Benchpress[i].months[k].weeks.length; u++){

            labels.push(exerciseStats.Benchpress[i].months[k].weeks[u].date);
            data.push(exerciseStats.Benchpress[i].months[k].weeks[u]["1RM"]);
            
        }
    }
}




//Chart Erstellung---------------------------------------------------------
const ctx = document.getElementById('myChart').getContext('2d');
const canvas = document.getElementById('myChart');
canvas.width = data.length * 120;
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: { display: false },
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
                grace: '10%',
                position: 'fixed',
                left: '0'
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    title: () => '',
                    label: ctx => ctx.formattedValue
                }
            }
        }
    }
});
//-----------------------------------------------------------------------

const jetzt = new Date();
console.log(jetzt.toLocaleDateString());
