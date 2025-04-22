//Daten auslesung und auswertung-------------------------------------------------------------------
let exercise = "Benchpress"; //Kategorie kann später der Nutzer ausuchen
const labels = []; //labels und data werden später mit den Daten befühlt und dann in der Grid erzeugung ausgelesen
const data = [];

//Hier werden alle Daten per for-Schleifen aus der jeweiligen Kategorie ausgelesen und in labels und data gepackt
for (let i = 0; i < exerciseStats.Benchpress.length; i++) {
    for (let k = 0; k < exerciseStats.Benchpress[i].months.length; k++){
        for (let u = 0; u < exerciseStats.Benchpress[i].months[k].weeks.length; u++){

            labels.push(exerciseStats.Benchpress[i].months[k].weeks[u].date);
            data.push(exerciseStats.Benchpress[i].months[k].weeks[u]["1RM"]);

        }
    }
}
//-------------------------------------------------------------------------------------------------



//Chart Erstellung---------------------------------------------------------
const canvas = document.getElementById('myChart');
canvas.width = data.length * 140; //Damit nicht alles zusammenklebt ist die Chart pro Datensatz um 140px länger (Scroll Funktion)

// Ab hier ist alles Chartjs
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: { display: false },
            data: data,
            pointRadius: 10,

            borderColor: '#4C4C4C',
            borderWidth: 3,
            borderDash: [6, 4],        // gestrichelt; weglassen, falls durchgezogen gewünscht
            tension: 0.4
        }]
    },
    options: {
        responsive: false,
        scales: {
            x: {                       // vertikale Gitterlinien unterdrücken
                grid: {
                  display: false
                },
                
            },
            y: {
                ticks: {
                    stepSize: 1
                },
                grace: '10%',
                grid: {                  // nur horizontale Linien
                    color: '#4C4C4C',
                    lineWidth: 3,
                    borderDash: [6, 4],     // gestrichelt; lässt sich anpassen oder entfernen
                }
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
