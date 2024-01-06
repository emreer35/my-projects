// form
const form = document.getElementById("film-form")
// inputs
const titleElement = document.getElementById("title") 
const directorElement = document.getElementById("director")
const urlElement = document.getElementById("url")

// body 
const secondCardBody = document.querySelectorAll(".card-body")[1]
// btn
const clear = document.getElementById("clear-film")

eventListener()

function eventListener(){
    form.addEventListener("submit",addFilm)
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage()
        UI.loadFilms(films)
    })
    secondCardBody.addEventListener("click",deleteFilm)
    clear.addEventListener("click",clearAllFilm)

}
function addFilm(e){
    const title = titleElement.value.trim()
    const director = directorElement.value.trim()
    const url = urlElement.value
    
    let isThere

    if(title === "" || director === "" || url === ""){
        UI.showAlert("danger","Lutfen gerekli alanlari doldurunuz.")
    }
    
    else{
        const newFilm = new Films(title,director,url)
        UI.addFilmToUI(newFilm)
        Storage.addFilmsFromStorage(newFilm)
        UI.showAlert("success",`${title} basariyla eklendi`)
        
    }
    UI.clearInput(titleElement,directorElement,urlElement)

    e.preventDefault()
    
}
function deleteFilm(e){
    const titleName = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e)
        Storage.deleteFilmFromStorage(e)
        UI.showAlert("success",`${titleName} basariyla silindi`)
    }
}
function clearAllFilm(){
    if(confirm("Tum Filmleri Silmek Istediginize emin misiniz ?")){
        UI.clearAllFilmFromUI()
        Storage.clearAllFilmFromStorage()
        UI.showAlert("warning","Tum Filmler Silindi.")
    }
    
}
