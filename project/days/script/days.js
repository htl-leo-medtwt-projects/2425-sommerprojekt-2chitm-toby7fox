//openDay-----------------------------------------------------------
for (let ö = 0; ö < days[0].categorys.length; ö++) {
        document.getElementById('contentBox').innerHTML += `
            <div class="categoryBox" id="${days[0].categorys[ö].name}">
                <div class="categoryTitleBox">
                    <p class="categoryTitle" onclick="rename(this)">${days[0].categorys[ö].name}</p>
                    <img src="img/hide.png" alt="hide" class="hideImg">
                </div>
            </div>
        `;
    for (let ä = 0; ä < days[0].categorys[ö].exercises[ä].length; ä++) {
        document.getElementById(days[ö].id).innerHTML += `
        <div class="exercise">
            <img src="img/exercise.png" alt="exercise" class="exerciseImg">
            <div class="exerciseData">
                <div class="exerciseNameBox">
                    <p class="exerciseName">${days[ö].categorys[ä].name}</p>
                    <img src="img/rename.png" alt="rename" class="renameIcon" onclick="rename(this.parentElement.querySelector('p'))">
                </div>
                <div class="exerciseValues">
                    <div class="sets" onclick="rename(this)">0 sets</div>
                    <div class="reps" onclick="rename(this)"> 0 reps</div>
                    <div class="weight" onclick="rename(this)">0kg</div>
                </div>
            </div>
        </div>
    `;
        }
    }