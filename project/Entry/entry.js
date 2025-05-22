function addSession(e) {
    months = JSON.parse(localStorage.getItem("months"));
    const now = new Date();
    const currentMonth = `${now.toLocaleString('en-US', { month: 'short' })}${now.getFullYear()}`;
    const currentWeekDay = now.toLocaleString('en-US', { weekday: 'long' });
    const currentMonthDay = String(now.getDate()).padStart(2, '0');

    for (let i = 0; i < months.length; i++) {
        if (currentMonth == months[i].month) {
            for (let h = 0; h < months[i].days.length; h++) {
                if (currentWeekDay == months[i].days[h].weekDay && currentMonthDay == months[i].days[h].monthDay) {
                    months[i].days[h].sessions.push(
                        {
                            "sport": e.querySelector('#nameBox').innerHTML,
                            "dataPoints": [
                                {
                                    "name": e.querySelector("#dataInputField1").placeholder,
                                    "value": e.querySelector("#dataInputField1").value
                                },
                                {
                                    "name": e.querySelector("#dataInputField2").placeholder,
                                    "value": e.querySelector("#dataInputField2").value
                                },
                                {
                                    "name": e.querySelector("#dataInputField3").placeholder,
                                    "value": e.querySelector("#dataInputField3").value
                                }
                            ]

                        }
                    );
                    localStorage.setItem("months", JSON.stringify(months));
                    console.log(localStorage.getItem("months"));

                    return;
                }
            }

            months[i].days.push(
                {
                    "monthDay": currentMonthDay,
                    "weekDay": currentWeekDay,
                    "sessions": [
                        {
                            "sport": e.querySelector('#nameBox').innerHTML,
                            "dataPoints": [
                                {
                                    "name": e.querySelector("#dataInputField1").placeholder,
                                    "value": e.querySelector("#dataInputField1").value
                                },
                                {
                                    "name": e.querySelector("#dataInputField2").placeholder,
                                    "value": e.querySelector("#dataInputField2").value
                                },
                                {
                                    "name": e.querySelector("#dataInputField3").placeholder,
                                    "value": e.querySelector("#dataInputField3").value
                                }
                            ]
                        },
                    ]
                }
            );
            localStorage.setItem("months", JSON.stringify(months));
            console.log(localStorage.getItem("months"));
            return;
        }
    }

    months.push(
        {
            "month": currentMonth,
            "days": [
                {
                    "monthDay": currentMonthDay,
                    "weekDay": currentWeekDay,
                    "sessions": [
                        {
                            "sport": e.querySelector('#nameBox').innerHTML,
                            "dataPoints": [
                                {
                                    "name": e.querySelector("#dataInputField1").placeholder,
                                    "value": e.querySelector("#dataInputField1").value
                                },
                                {
                                    "name": e.querySelector("#dataInputField2").placeholder,
                                    "value": e.querySelector("#dataInputField2").value
                                },
                                {
                                    "name": e.querySelector("#dataInputField3").placeholder,
                                    "value": e.querySelector("#dataInputField3").value
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    );
    localStorage.setItem("months", JSON.stringify(months));
    console.log(localStorage.getItem("months"));
    return;
}


