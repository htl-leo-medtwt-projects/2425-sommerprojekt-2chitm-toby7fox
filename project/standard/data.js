var days = [
    {
        "name": "Example",
        "id": "Example1",
        "categorys": [
            {
                "name": "Chest",
                "exercises": [
                    {
                        "name": "Benchpress",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    },
                    {
                        "name": "Dips",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    }
                ]
            },
            {
                "name": "Shoulder",
                "exercises": [
                    {
                        "name": "Shoulderpress",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5 
                    },
                    {
                        "name": "Sidelift",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    }
                ]
            },
            {
                "name": "Tricep",
                "exercises": [
                    {
                        "name": "Shoulderpress",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    },
                    {
                        "name": "Sidelift",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    },
                    {
                        "name": "Sidelift",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    }
                ]
            },
            {
                "name": "Bicep",
                "exercises": [
                    {
                        "name": "Shoulderpress",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    },
                    {
                        "name": "Sidelift",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    },
                    {
                        "name": "Sidelift",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    }
                ]
            }
        ]
    },
    {
        "name": "Example",
        "id": "Example1",
        "categorys": [
            {
                "name": "Chest",
                "exercises": [
                    {
                        "name": "Benchpress",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    },
                    {
                        "name": "Dips",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    }
                ]
            },
            {
                "name": "Shoulder",
                "exercises": [
                    {
                        "name": "Shoulderpress",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    },
                    {
                        "name": "Sidelift",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    }
                ]
            }
        ]
    }
]


//openDay-----------------------------------------------------------
localStorage.setItem("dayId", "");
function openDay(day){
    localStorage.setItem("dayId", day.querySelector('p').getAttribute("id"));
    window.location.href = "../days/day.html";
}