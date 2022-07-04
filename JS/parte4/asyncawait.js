const promessa = new Promise(function(resolve, reject) {

    return resolve('ok')

})

async function start() {
    try {
        const result = await promessa
        console.log(result)
    } catch( e) {
        console.log(e)
    } finally {
        console.log('rodar sempre')
    }
    
}

start()
promessa
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    })
    .finally(function() {
        console.log('done')
    })


async function start() {
    const url = 'https://api.github.com/users/maykbrito';
    const user = await fetch(url).then(r => r.json())
    const userRepos = await fetch(user.repos_url).then(r => r.json());
    console.log(userRepos)
}
start().catch(e => console.log(e))

