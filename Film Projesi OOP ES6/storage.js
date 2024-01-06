class Storage{
    static addFilmsFromStorage(newFilm){
        let films = this.getFilmsFromStorage()
        films.push(newFilm)
        localStorage.setItem("films",JSON.stringify(films))

    }
    static getFilmsFromStorage(){
        let films 
        if(localStorage.getItem("films") === null){
            films =[]
        }
        
        else {
            films = JSON.parse(localStorage.getItem("films"))
        }
        return films
    }
    static deleteFilmFromStorage(e){
        let films = this.getFilmsFromStorage()
        const tr = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
        films.forEach(function(film,index){
            if(film.title === tr){
                films.splice(index,1)
            }
        });
        localStorage.setItem("films",JSON.stringify(films))
    }
    static clearAllFilmFromStorage(){
        localStorage.removeItem("films")
    }
    
}