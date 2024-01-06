class UI{
    static showAlert(type,messages){
        const firstCardBody = document.querySelectorAll(".card-body")[0]
        const alert = document.createElement("div")
        alert.className = `alert alert-${type}`
        alert.textContent = messages
        firstCardBody.appendChild(alert)

        setTimeout(() => {
            alert.remove()
        },1500)
    }
    static addFilmToUI(newFilm){
        const tbody = document.getElementById("films")
        tbody.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
        </tr>`
    }
    static clearInput(title,director,url){
        title.value = ""
        director.value = ""
        url.value = ""
    }
    static loadFilms(films){
        let loadFilm = document.getElementById("films")
        films.forEach(film => {
        loadFilm.innerHTML += `
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail" style="width:200px; height:auto"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
        </tr>
        `
    });
    }
    static deleteFilmFromUI(e){
        e.target.parentElement.parentElement.remove()
    }
    static clearAllFilmFromUI(e){
        const tbody = document.querySelector("#films")
        while(tbody.firstElementChild !== null){
            tbody.firstElementChild.remove()
        }
    }
    
}