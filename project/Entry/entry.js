function addSession(e) {
    months = JSON.parse(localStorage.getItem("months")) ?? months;
    const now = new Date();
    const currentMonth = `${now.toLocaleString('en-US', { month: 'short' })}${now.getFullYear()}`;
    const currentWeekDay = now.toLocaleString('en-US', { weekday: 'long' });
    const currentMonthDay = String(now.getDate()).padStart(2, '0');

    let data1Name;
    let data1Value;
    let data2Name;
    let data2Value;
    let data3Name;
    let data3Value;

    if (e.querySelector("#dataInputField1").value == ""){
        alert("1 ist leer");
        data1Name = "";
        data1Value = "";
    }else{
        data1Name = e.querySelector("#dataInputField1").placeholder;
        data1Value = e.querySelector("#dataInputField1").value;
    }

    if (e.querySelector("#dataInputField2").value == ""){
        alert("2 ist leer");
        data2Name = "";
        data2Value = "";
    }else{
        data2Name = e.querySelector("#dataInputField2").placeholder;
        data2Value = e.querySelector("#dataInputField2").value;
    }

    if (e.querySelector("#dataInputField3").value == ""){
        alert("3 ist leer");
        data3Name = "";
        data3Value = "";
    }else{
        data3Name = e.querySelector("#dataInputField3").placeholder;
        data3Value = e.querySelector("#dataInputField3").value;
    }

    for (let i = 0; i < months.length; i++) {
        if (currentMonth == months[i].month) {
            for (let h = 0; h < months[i].days.length; h++) {
                if (currentWeekDay == months[i].days[h].weekDay && currentMonthDay == months[i].days[h].monthDay) {
                    months[i].days[h].sessions.push(
                        {
                            "sport": e.querySelector('#nameBox').innerHTML,
                            "dataPoints": [
                                {
                                    "name": data1Name,
                                    "value": data1Value
                                },
                                {
                                    "name": data2Name,
                                    "value": data2Value
                                },
                                {
                                    "name": data3Name,
                                    "value": data3Value
                                }
                            ]

                        }
                    );
                    localStorage.setItem("months", JSON.stringify(months));
                    console.log(localStorage.getItem("months"));
                    alert("Session added");
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
                                    "name": data1Name,
                                    "value": data1Value
                                },
                                {
                                    "name": data2Name,
                                    "value": data2Value
                                },
                                {
                                    "name": data3Name,
                                    "value": data3Value
                                }
                            ]
                        },
                    ]
                }
            );
            localStorage.setItem("months", JSON.stringify(months));
            console.log(localStorage.getItem("months"));
            alert("Session added");
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
                                    "name": data1Name,
                                    "value": data1Value
                                },
                                {
                                    "name": data2Name,
                                    "value": data2Value
                                },
                                {
                                    "name": data3Name,
                                    "value": data3Value
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
    alert("Session added");
    return;
}


