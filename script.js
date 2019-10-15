const users = {
    username: '',
    cards: ''
}

function getUsers() {
    let username = document.getElementById("inputUsername").value;
    let password = document.getElementById("inputPassword").value;
    fetch("users.json")
        .then(res => res.json())
        .then(data => {
            for (i in data) {
                if (data[i].name == username && data[i].password == password) {
                   title.innerHTML = "Välkommen tillbaka" + " " + username ;                    
                   users.username = data[i].name
                   users.cards = addCardDeck()
                   localStorage.setItem('users', JSON.stringify(users))
                   showCards()
                }
            }
            if(data[i].name !== username || data[i].password !== password)
                {
                    window.alert("Fel användarnamn eller lösenord!")
                    location.reload()
                }
        })
}

// returns string with deckcards for localstorage
function addCardDeck(){
    return `
    <button type="button" class="btn btn-primary" onclick="logOut()">Logga ut</button>
    <div class="card-deck mt-5">
        <div class="col-sm-6 col-md-4 col-xl p-0 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Todo</h5>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                        <div id ="drag1" class="border border-dark p-3" draggable = "true" ondragstart="drag(event)" ondrop="return false" ondragover="return false">
                        <p>Demo text för Todo</p>
                        </div>
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <button type="button" class="btn btn-light w-100">Lägg till kort</button>

                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl p-0 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Doing</h5>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                        <div id ="drag2" class="border border-dark p-3" draggable = "true" ondragstart="drag(event)" ondrop="return false" ondragover="return false">
                        <p>Demo text för Doing</p>
                        </div>
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <button type="button" class="btn btn-light w-100">Lägg till kort</button>

                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl p-0 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Test</h5>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                        <div id ="drag3" class="border border-dark p-3" draggable = "true" ondragstart="drag(event)" ondrop="return false" ondragover="return false">
                        <p>Demo text för Test</p>
                        </div>
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <button type="button" class="btn btn-light w-100">Lägg till kort</button>

                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl p-0 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Done</h5>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                        <div id ="drag4" class="border border-dark p-3" draggable = "true" ondragstart="drag(event)" ondrop="return false" ondragover="return false">
                        <p>Demo text för Todo</p>
                        </div>
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

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
    </div>
    `
}

// shows cards on browser
function showCards() {
        const container = document.getElementsByClassName('container')[0]
        const saved = JSON.parse(localStorage.getItem('users'))
        container.insertAdjacentHTML('beforeend', saved.cards)
        removeBtn()
}

if(localStorage.getItem('users')){
    showCards()

}

// removes log in button
function removeBtn() {
    const btn = document.querySelector('button')
    btn.remove()
}

// logs out from kanban
function logOut(){
    localStorage.clear()
    location.reload()
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, el) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  el.appendChild(document.getElementById(data));

}
