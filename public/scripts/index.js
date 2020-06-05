const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector('#modal')
const closes = document.querySelector("#modal .header a")

buttonSearch.addEventListener("click", () =>{
    modal.classList.remove("hide")
})

closes.addEventListener("click", () => {
    modal.classList.add("hide")
})