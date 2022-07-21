const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser){
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        UserID.textContent = data.ID
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const newUser = {
    name: "Petrônio Cangussu",
    avatar: "https://picsum.photos/200/300",
    city: "Salvador"
}

const userUpdated = {
    name: "Marcelo Clovis",
    avatar: "https://picsum.photos/200/300",
    city: "Hellcife"
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}


deleteUser(3)
//getUsers(3)
getUser(1)
//updateUser(3, userUpdated)
//addNewUser()