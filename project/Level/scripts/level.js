//Daten auslesung und auswertung-------------------------------------------------------------------
let exercise = "Bicepcurl"; //Kategorie kann später der Nutzer ausuchen
const labels = []; //labels und data werden später mit den Daten befühlt und dann in der Grid erzeugung ausgelesen
const data = [];

//Hier werden alle Daten per for-Schleifen aus der jeweiligen Kategorie ausgelesen und in labels und data gepackt
for (let i = 0; i < exerciseStats[exercise].length; i++) {
    for (let k = 0; k < exerciseStats[exercise][i].months.length; k++){
        for (let u = 0; u < exerciseStats[exercise][i].months[k].weeks.length; u++){

            labels.push(exerciseStats[exercise][i].months[k].weeks[u].date);
            data.push(exerciseStats[exercise][i].months[k].weeks[u]["1RM"]);

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
        labels: labels, //Labels werden weitergegeben
        datasets: [{
            label: "Gewicht", //Was überhaupt angezeigt wird (steht da beim hovern)
            data: data, //Daten werden weitergegeben
            pointRadius: 10,

            borderColor: '#FF8A65', //Farbe der Wertelinie
            borderWidth: 3, //Bordergröße der Punkte
            borderDash: [6, 4],        // gestrichelt; weglassen, falls durchgezogen gewünscht
        }]
    },
    options: {
        responsive: false,
        scales: {
            x: {                   
                grid: {display: false}, // Vertikale Striche werden nicht angezeigt
                ticks: {
                    color: '#FF8A65', //Schriftfarbe
                },
                offset: true //Ein bischen Abstand zum Rand
            },
            y: {
                ticks: {
                    stepSize: 1, //Alle ... Werte kommte eine Linie
                    color: '#FF8A65', //Schriftfarbe
                },
                grace: '10%', // % der Werte sollen oben und unten noch dran gehängt werden
                grid: {                
                    color: '#4C4C4C', //Farbe der horizontalen linien
                    lineWidth: 2, //Dicke der horizontalen linien
                    borderDash: [6, 4],     // Das funktioniert nicht, es ist nicht gestrichelt
                },
            },
            
        },
        plugins: {
            legend: { display: false } //Legende wird nicht angezeigt
        }
    }
});
//-----------------------------------------------------------------------

//So bekommt man das lokale Datum des Computers
const jetzt = new Date();
console.log(jetzt.toLocaleDateString());
