console.log(JSON.parse(localStorage.getItem("months")));
months = JSON.parse(localStorage.getItem("months")) ?? months;
let currentMonth;
let currentDay;

for (let i = 0; i < months.length; i++) {
    document.getElementById('contentBox').innerHTML += `<div class="month"><p class="monthName">${months[i].month}</p></div>`;
    currentMonth = document.querySelectorAll('.month');
    currentMonth = currentMonth[currentMonth.length - 1];
    for (let h = 0; h < months[i].days.length; h++) {
        currentMonth.innerHTML += `<div class="day"><p class="dayName">${months[i].days[h].monthDay} ${months[i].days[h].weekDay}</p></div>`;
        currentDay = document.querySelectorAll('.day');
        currentDay = currentDay[currentDay.length - 1];

        for (let r = 0; r < months[i].days[h].sessions.length; r++) {

            currentDay.innerHTML += `<div class="session">
                <p class="sessionName">${months[i].days[h].sessions[r].sport}</p>
                <p class="sessionInfo1">${months[i].days[h].sessions[r].dataPoints[0].value}${months[i].days[h].sessions[r].dataPoints[0].name}</p>
                <p class="sessionInfo2">${months[i].days[h].sessions[r].dataPoints[1].value}${months[i].days[h].sessions[r].dataPoints[1].name}</p>
                <p class="sessionInfo3">${months[i].days[h].sessions[r].dataPoints[2].value}${months[i].days[h].sessions[r].dataPoints[2].name}</p>
            </div>`;
        }
    }
}