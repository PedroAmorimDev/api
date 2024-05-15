document.addEventListener("DOMContentLoaded", () => {
    const urlFollowers = "https://api.github.com/users/caioliweira/followers"

    fetch(urlFollowers)
        .then((response) => {
            if (!response.ok) {
                throw new Error("erro carai")
            }
            return response.json()
        })
        .then((data) => {
            renderizarFollowers(data)
            console.log(data)
        })
        .catch((err) => console.log(err))
})


const renderizarFollowers = (items) => {

    const containerFollowers = document.getElementById("followers")

    items.forEach((item) => {
        const divFollowers = document.createElement('div')

        divFollowers.innerHTML = `
    <img class="followersFoto" alt="avatar de ${item.login}" src="${item.avatar_url}">
    <p class="nomeSeguidor">${item.login}</p>
    `
    divFollowers.classList.add('divSeguidores')
        containerFollowers.appendChild(divFollowers)


    })
}