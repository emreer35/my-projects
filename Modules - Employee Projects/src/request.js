export class Request {
    constructor(url){
        this.url = url

    }
    async get(){
        const response = await fetch(this.url)
        const responseData = await response.json()

        return responseData
    }
    async post(data){
        const response = await fetch(this.url,{
            method: "post",
            body : JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        const responseData = await response.json()

        return responseData
    }
    async put(id,data){
        const response = await fetch(this.url + "/" + id, {
            method: "put",
            body : JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        const responseData = await response.json()

        return responseData
    }
    async delete(id){
        const response = await fetch(this.url +"/"+id,{
            method:"delete",
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        return "Data is Deleted."
    }
}