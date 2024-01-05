export class UI{
    constructor(){
        this.tbody = document.getElementById("employees")
        this.update = document.getElementById("update")
        this.empNameInput = document.getElementById("name")
        this.empDepartmentInput = document.getElementById("department")
        this.empSalaryInput = document.getElementById("salary")
    }

    addAllEmployeestoUi(employees){
        // <tr>
        //     <td>Mustafa Murat Coşkun</td>
        //     <td>Bilişim</td>
        //     <td>4000</td>
        //     <td>1</td>
        //     <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        //     <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        // </tr>
        let result = ""
        employees.forEach(function(employee) {
            result += `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>
            `
            
        });
        this.tbody.innerHTML = result
    }
    clearInput(){
        this.empNameInput.value = ""
        this.empDepartmentInput.value = ""
        this.empSalaryInput.value = ""
    }
    addEmployeesToUI(employee){
        // this.empNameInput.value = employee.name
        // this.empDepartmentInput.value = employee.department
        // this.empSalaryInput.value = employee.salary
        this.tbody.innerHTML += `
        <tr>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>
        `
    }
    deleteEmployeeToUi(element){
        element.remove()
    }
    toggleUpdateBtn(target){
        if(this.update.style.display === "none"){
            this.update.style.display = "block"
            const children = target.children
            this.empNameInput.value = children[0].textContent
            this.empDepartmentInput.value = children[1].textContent
            this.empSalaryInput.value = children[2].textContent


        }
        else{
            this.update.style.display = "none"
            this.clearInput()
        }
    }
    updateEmployeeOnUI(employee,data){
        data.innerHTML = `
        <tr>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>
        `
        this.clearInput()
    }
    
}