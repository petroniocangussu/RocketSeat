const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser(id) {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    })
    .then(response => response.json())
    .then(data => alert.Api.textContent = data)
    .catch(error => console.error(error))

}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    })
    .then(response => response.json())
    .then(data => alert.Api.textContent = data)
    .catch(error => console.log(error))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    }) 
        .then(response => response.json())
        .then(data => alert.Api.textContent = data)
        .catch(error => console.log(error))
}

const newUser = {
    name: "Petrônio Cangussu",
    avatar: "https://pps.whatsapp.net/v/t61.24694-24/256468224_2086316744860120_6432353157997039222_n.jpg?ccb=11-4&oh=01_AVwhmCDdQq8MENdv87xGNlaODwJeW2xpZOd7Z9ZYwlhiRA&oe=62CED797",
    city: "Salvador"
}

//addUser(newUser)
const updatedUser = {
    name: "Milena Reis",
    avatar: "https://pps.whatsapp.net/v/t61.24694-24/247254129_639898253787604_8585578767938473872_n.jpg?ccb=11-4&oh=01_AVzD6sC-m2SNeIyFjn--wfW3DTKGvcYIljywLRyklCuSDg&oe=62D47E83",
    city: "Feira de Santana"
}
//updateUser(updatedUser, 8) 
//deleteUser(13)
getUsers()
getUser(8)