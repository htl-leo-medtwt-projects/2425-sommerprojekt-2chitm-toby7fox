var days = [
    {
        "name": "Example",
        "id": "Example1",
        "categorys": [
            {
                "name": "Chest",
                "id": "Chest1",
                "exercises": [
                    {
                        "name": "Benchpress",
                        "id": "Benchpress1",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5,
                        "rangeLow": 3,
                        "rangeHigh": 5
                    },
                    {
                        "name": "Dips",
                        "id": "Dips1",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5,
                        "rangeLow": 3,
                        "rangeHigh": 5
                    }
                ]
            },
        ]
    }
]


//openDay-----------------------------------------------------------
function openDay(day){
    for (let i = 0; i < days.length; i++) {
        if (days[i].id == day.querySelector('p').getAttribute("id")){
            localStorage.setItem("dayNumber", i);
        }
    }
    window.location.href = "day.html";
}