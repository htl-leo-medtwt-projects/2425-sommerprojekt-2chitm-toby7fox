function addCategory(){
    document.getElementById('categoryBox').innerHTML += `
        <div class="category">
            <p class="categorytext" onclick="rename(this.parentElement)">Name</p>
        </div>
    `;
}

let categorytext;
function rename(e) {
  e.innerHTML = `<input onchange="rename2(this)" class="inputNN">`;
  categorytext = e;
  
  const newInput = e.querySelector('.inputNN');
  setTimeout(() => {
    newInput.focus();
  }, 0);
}

function rename2(i){
    categorytext.innerHTML = `<p class="categorytext" onclick="rename(this.parentElement)">${i.value}</p>`;
}