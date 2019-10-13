function getUsers() {
    let username = document.getElementById("inputUsername").value;
    let password = document.getElementById("inputPassword").value;
    fetch("users.json")
        .then(res => res.json())
        .then(data => {
            for (i in data) {
                if (data[i].name == username && data[i].password == password) {
                    console.log("Det funkar!");
                     return
                }
             
            }
        })
}