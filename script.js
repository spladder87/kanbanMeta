var divId = 0;
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
                    
                    title.innerHTML = "Välkommen tillbaka" + " " + username;
                    
                    users.username = data[i].name
                    users.cards = addCardDeck()
                    localStorage.setItem('users', JSON.stringify(users))
                    showCards()
                }
            }
            if (data[i].name !== username || data[i].password !== password) {
                window.alert("Fel användarnamn eller lösenord!")
                location.reload()
            }
        })
}

// returns string with deckcards for localstorage
function addCardDeck() {
    return `
    <button type="button" class="btn btn-primary" onclick="logOut()">Logga ut</button>
    <div class="card-deck mt-5">
        <div class="col-sm-6 col-md-4 col-xl p-0 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title" contenteditable="true">Todo</h5>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                        <div id ="drag1" class="border border-dark p-3" draggable = "true" ondragstart="drag(event)" ondrop="return false" ondragover="return false">
                        <p contenteditable="true">Demo text för Todo</p>
                        <button type="button" class="btn btn-danger" onclick="removeCard(this)"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <button type="button" class="btn btn-light btn-block mt-1" onclick="addCard(this)">Lägg till kort</button>

                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl p-0 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title" contenteditable="true">Doing</h5>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                        <div id ="drag2" class="border border-dark p-3" draggable = "true" ondragstart="drag(event)" ondrop="return false" ondragover="return false">
                        <p contenteditable="true">Demo text för Doing</p>
                        <button type="button" class="btn btn-danger" onclick="removeCard(this)"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <button type="button" class="btn btn-light btn-block mt-1" onclick="addCard(this)">Lägg till kort</button>

                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl p-0 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title" contenteditable="true">Test</h5>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                        <div id ="drag3" class="border border-dark p-3" draggable = "true" ondragstart="drag(event)" ondrop="return false" ondragover="return false">
                        <p contenteditable="true">Demo text för Test</p>
                        <button type="button" class="btn btn-danger" onclick="removeCard(this)"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <button type="button" class="btn btn-light btn-block mt-1" onclick="addCard(this)">Lägg till kort</button>

                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl p-0 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title" contenteditable="true">Done</h5>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                        <div id ="drag4" class="border border-dark p-3" draggable = "true" ondragstart="drag(event)" ondrop="return false" ondragover="return false">
                        <p contenteditable="true">Demo text för Todo</p>
                        <button type="button" class="btn btn-danger" onclick="removeCard(this)"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <button type="button" class="btn btn-light btn-block mt-1" onclick="addCard(this)">Lägg till kort</button>

                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl p-0 mb-3">
            <div class="card border-0">
                <div class="card-body p-0">
                    <button type="button" class="btn btn-light btn-block" onclick="openFormToAddNewList()">Lägg till lista</button>
                </div>
            </div>
        </div>
    </div>
    `
}

// shows cards on browser
const container = document.getElementsByClassName('container')[0]
function showCards() {
    const container = document.getElementsByClassName('container')[0]
    const saved = JSON.parse(localStorage.getItem('users'))
    container.insertAdjacentHTML('beforeend', saved.cards)
    removeBtn()
}

if (localStorage.getItem('users')) {
    showCards()

}

// removes log in button
function removeBtn() {
    const btn = document.querySelector('button')
    btn.remove()
}

// logs out from kanban
function logOut() {
    localStorage.clear()
    location.reload()
}

// drag-n-drop
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

// adds form for adding a new list
const cards = document.getElementsByClassName('card-deck mt-5')[0]
const newListColumn = cards.lastElementChild

function openFormToAddNewList() {
    newListColumn.lastElementChild.insertAdjacentHTML('beforeend', `
    <form id="new-list-form" class="form-inline">
        <div class="form-group p-0 w-100">
            <input type="text" id="new-list-title" class="form-control mb-2 w-100" placeholder="Ange namn här ...">
        </div>
        <div class="btn-group btn-block" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-primary mr-1" onclick="addNewList()">Spara</button>
            <button type="submit" class="btn btn-outline-primary">Ångra</button>
        </div>
    </form>
    `)
    newListColumn.lastElementChild.firstElementChild.hidden = true
}

function isTitle(input) {
    const titles = document.getElementsByClassName('card-title')
    for(let i =0; i < titles.length; i++) {
        if(input.toLowerCase() === titles[i].textContent.toLocaleLowerCase()){
            newListColumn.lastElementChild.insertAdjacentHTML('beforeend', `
                <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
                    <strong>Felmeddelande!</strong> Namnet "${input}" redan finns. Välj ett annat namn.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `)
            return false
        } 
    }
    return true
}

function addNewList() {
    const form = document.getElementById('new-list-form')
    const input = document.getElementById('new-list-title').value

    if(input.length > 0 && isTitle(input)) {
        newListColumn.insertAdjacentHTML('beforebegin', `
        <div class="col-sm-6 col-md-4 col-xl p-0 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title" contenteditable="true">${input}</h5>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>

                    <button type="button" class="btn btn-light btn-block" onclick="addCard(this)">Lägg till kort</button>

                </div>
            </div>
        </div>
        `)
        form.remove()
        newListColumn.lastElementChild.firstElementChild.hidden = false
    } 
}

function addCard(el) {

    el.insertAdjacentHTML('beforebegin', `<div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
    <div id ="div${divId}" class="border border-dark p-3" draggable = "true" ondragstart="drag(event)" ondrop="return false" ondragover="return false">
    <p contenteditable="true">Insert text here</p><button type="button" class="btn btn-danger" onclick="removeCard(this)"><i class="fa fa-trash"></i></button></div></div>
    <div class="dropzone border border-dark p-3" ondrop="drop(event, this)" ondragover="allowDrop(event)">
                    </div>
`);

    divId++;

}

function removeCard(el) {
    el.parentNode.remove();
}
