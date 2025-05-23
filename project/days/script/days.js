let dayNumber = localStorage.getItem("dayNumber");
days = JSON.parse(localStorage.getItem("data") ?? days);
let globalLock = true;

function loadCategorys() {
    if (!globalLock) {
        return;
    }
    document.getElementById('contentBox').innerHTML = null; //HTML reseten

    for (let ö = 0; ö < days[dayNumber].categorys.length; ö++) {  //geht alle Kategorien durch und ladet dazu passendes HTML
        document.getElementById('contentBox').innerHTML += `
            <div class="categoryBox" id="${days[dayNumber].categorys[ö].id}">
                <div class="categoryTitleBox">
                    <p class="categoryTitle" id="${days[dayNumber].categorys[ö].id}">${days[dayNumber].categorys[ö].name}</p>
                    <img src="days/img/hide.png" class="hideImg" onclick="hide(this)">
                </div>
            </div>
        `;
        for (let ä = 0; ä < days[dayNumber].categorys[ö].exercises.length; ä++) { //In der Kategorie werden auch direkt alle Exercises geladen
            document.getElementById(days[dayNumber].categorys[ö].id).innerHTML += `
            <div class="extendetExerciseBox" onclick="extendExercise(this)">
                <div class="exercise">
                    <img src="days/img/exercise.png" alt="exercise" class="exerciseImg">
                    <div class="exerciseData">
                        <div class="exerciseNameBox">
                            <p class="exerciseName">${days[dayNumber].categorys[ö].exercises[ä].name}</p>
                        </div>
                        <div class="exerciseValues">${days[dayNumber].categorys[ö].exercises[ä].sets} sets / ${days[dayNumber].categorys[ö].exercises[ä].reps} reps / ${days[dayNumber].categorys[ö].exercises[ä].weight}kg</div>
                        
                    </div>
                </div>
            </div>
            `;
        }
    }
}

loadCategorys();

function extendExercise(e) {
    if (!globalLock) {
        return;
    }
    globalLock = false;

    let exerciseName = e.querySelector('.exerciseName').innerHTML;

    for (let i = 0; i < days[dayNumber].categorys.length; i++) {
        for (let k = 0; k < days[dayNumber].categorys[i].exercises.length; k++) {
            console.log(days[dayNumber].categorys[i].exercises[i].name);


            if (days[dayNumber].categorys[i].exercises[i].name == exerciseName) {
                e.innerHTML = `
                
                <div class="exercise">
                    <img src="days/img/exercise.png" alt="exercise" class="exerciseImg">
                    <div class="exerciseData">
                        <div class="exerciseNameBox">
                            <p class="exerciseName">${days[dayNumber].categorys[i].exercises[i].name}</p>
                        </div>
                        <div class="exerciseValues">${days[dayNumber].categorys[i].exercises[i].sets} sets / ${days[dayNumber].categorys[i].exercises[i].reps} reps / ${days[dayNumber].categorys[i].exercises[i].weight}kg</div>
                    </div>
                </div>
                <div class="exerciseInfoBox">
                    <div class="nameInfoBox">
                        <p class="nameInfo1">Name :</p>
                        <p class="nameInfo2" onclick="renameExerciseName(this)">${days[dayNumber].categorys[i].exercises[i].name}</p>
                    </div>
                    <div class="countInfoBox">
                        <div class="setsInfoBox">
                            <div class="posEnd">
                                <p class="setsInfo1">sets :</p>
                                <div class="setsInfo2" onclick="renameExerciseName(this)">${days[dayNumber].categorys[i].exercises[i].sets}</div>
                            </div>
                        </div>
                        <div class="repsInfoBox">
                            <div class="posEnd">
                                <p class="repsInfo1">reps :</p>
                                <div class="repsInfo2" onclick="renameExerciseName(this)">${days[dayNumber].categorys[i].exercises[i].reps}</div>
                            </div>
                        </div>
                    </div>
                    <div class="weightsInfoBox">
                        <div class="weightInfoBox">
                            <div class="posEnd">
                                <p class="weightInfo1">kg :</p>
                                <div class="weightInfo2" onclick="renameExerciseName(this)">${days[dayNumber].categorys[i].exercises[i].weight}</div>
                            </div>
                        </div>
                        <div class="rmInfoBox">
                            <div class="posEnd">
                                <p class="rmInfo1">1RM :</p>
                                <div class="rmInfo2">error</div>
                            </div>
                        </div>
                    </div>
                    <div class="poInfoBox">
                        <div class="repRInfoBox">
                            <div class="posEnd">
                                <p class="repRInfo1">rep.r :</p>
                                <div class="repRInfo2" onclick="renameExerciseName(this)">${days[dayNumber].categorys[i].exercises[i].rangeLow}-${days[dayNumber].categorys[i].exercises[i].rangeHigh}</div>
                            </div>
                        </div>
                        <div class="nweightInfoBox">
                            <div class="posEnd">
                                <p class="nweightInfo1">n.weight :</p>
                                <div class="nweightInfo2">error</div>
                            </div>
                        </div>
                    </div>
                    <div class="submitBox">
                        <div class="submitButton">Submit</div>
                        <div class="cancelButton">Cancel</div>
                    </div>
                </div>
                
                `;
                return;
            }
        }
    }
}