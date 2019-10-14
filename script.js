function getUsers() {
    let username = document.getElementById("inputUsername").value;
    let password = document.getElementById("inputPassword").value;
    fetch("users.json")
        .then(res => res.json())
        .then(data => {
            for (i in data) {
                if (data[i].name == username && data[i].password == password) {
                   //console.log("Det funkar!");
                   addCardDeck()
                   removeBtn()
                }
             
            }
        })
}

// adds kanban board
function addCardDeck(){
    const container = document.getElementsByClassName('container')[0]
    container.insertAdjacentHTML('beforeend', 
    `<div class="card-deck mt-5">
        <div id="div1" class="col-sm-6 col-md-4 col-xl p-0 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Todo</h5>
                    <p class="card-text">Demo text för Todo</p>
                    <button type="button" class="btn btn-light w-100">Lägg till kort</button>
                </div>
            </div>
        </div>
        <div id="div1" class="col-sm-6 col-md-4 col-xl p-0 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Doing</h5>
                    <p class="card-text">Demo text för Donig</p>
                    <button type="button" class="btn btn-light w-100">Lägg till kort</button>
                </div>
            </div>
        </div>
        <div id="div1" class="col-sm-6 col-md-4 col-xl p-0 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Test</h5>
                    <p class="card-text">Demo text för Test</p>
                    <button type="button" class="btn btn-light w-100">Lägg till kort</button>
                </div>
            </div>
        </div>
        <div id="div1" class="col-sm-6 col-md-4 col-xl p-0 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Done</h5>
                    <p class="card-text">Demo text för Done</p>
                    <button type="button" class="btn btn-light w-100">Lägg till kort</button>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl p-0 mb-3">
            <div class="card border-0">
                <div class="card-body p-0">
                    <button type="button" class="btn btn-light w-100">Lägg till lista</button>
                </div>
            </div>
        </div>
    </div>`
    )
}

// removes log in button
function removeBtn() {
    const btn = document.querySelector('button')
    btn.remove()
}