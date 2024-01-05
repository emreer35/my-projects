import {Request} from './request';
import { UI } from "./ui";

const empNameInput = document.getElementById("name")
const empDepartmentInput = document.getElementById("department")
const empSalaryInput = document.getElementById("salary")


const submitForm = document.getElementById("employee-form")
const tbody = document.getElementById("employees")
const updateBtn = document.getElementById("update")


const request = new Request("http://localhost:3000/employess")
const ui = new UI()
let updateState = null
eventListener()

function eventListener(){
    document.addEventListener("DOMContentLoaded", ()=>{
        request.get()
        .then((result) => {
            ui.addAllEmployeestoUi(result)
        }).catch((err) => {
            console.error(err);
        });
    })
    submitForm.addEventListener("submit",addEmployee)
    tbody.addEventListener("click",deleteEmployee)
    updateBtn.addEventListener("click",updateEmployee)

}
function addEmployee(e){
    const nameInput = empNameInput.value.trim()
    const departmentInput = empDepartmentInput.value.trim()
    const salaryInput = empSalaryInput.value.trim()
    if(nameInput === "" || departmentInput === "" || salaryInput === ""){
        alert("Please fill all the blank areas")
    }
    else{
        request.post({name:nameInput, department: departmentInput, salary:Number(salaryInput)})
        .then((result) => {
            ui.addEmployeesToUI(result)
        }).catch((err) => {
            console.error(err);
        });
    }

    ui.clearInput()
    e.preventDefault()
}
function deleteEmployee(e){
    // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    const id = e.target.parentElement.previousElementSibling.previousElementSibling.textContent

    if (e.target.id === "delete-employee"){
        
        // deleteEmployees(e.target)
        request.delete(id)
        .then((result) => {
            ui.deleteEmployeeToUi(e.target.parentElement.parentElement)
        }).catch((err) => {
            console.error(err);
        });
    }
    else if (e.target.id === "update-employee"){
        const tr = e.target.parentElement.parentElement
        ui.toggleUpdateBtn(tr)

        if(updateState === null){
            updateState ={
                updateID : tr.children[3].textContent,
                updateParent : tr
            }
        }
        else{
            updateState = null
        }

    }

}

function updateEmployee(){
    if(updateState !== null){
        const data = {name:empNameInput.value.trim(),department:empDepartmentInput.value.trim(),salary:Number(empSalaryInput.value.trim())}
        console.log(data);
        
        request.put(updateState.updateID,data)
        .then((result) => {
            ui.updateEmployeeOnUI(result,updateState.updateParent)
            
            
        }).catch((err) => {
            console.error(err);
        });
    }
}


// request.get()
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// request.post({name:"yunus emre er",department:"web developer",salary:50000 })
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


// request.put(3,{name:"yunus emre",salary:"1000",department:"lawyer"})
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// request.delete(2)
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });