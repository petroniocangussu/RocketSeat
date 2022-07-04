axios.get('https://github.com/users/maykbrito')
.then(response => {
    console.log(response.data)
})
.catch(error => console.log(error))

promises.all([
    axios.get('https://github.com/users/maykbrito'),
    axios.get('https://github.com/users/maykbrito/repos')
])
.then( responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data.lenght)
})
.catch(err => console.log(err.message))