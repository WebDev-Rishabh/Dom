document.addEventListener("DOMContentLoaded", loadRecords);
// defining variables
const Sname = document.getElementById("fName") ;
const id = document.getElementById("id") ;
const email = document.getElementById("email") ;
const contactNo = document.getElementById("contactNo") ;
const submit = document.getElementById("submit") ;
const outputDiv = document.getElementById("output") ;


if (submit) {
    submit.addEventListener("click", showform);
}

function showform(event) {
    
    event.preventDefault();
    if(!validateInputs()) return;
    const student = `${Sname.value.trim()}|${id.value.trim()}|${email.value.trim()}|${contactNo.value.trim()}`;

    saveToLocalStorage(student);

    displayStudent(student);

    Sname.value = "";
    id.value = "";
    email.value = "";
    contactNo.value = "";
}
// To validate the user input

    function validateInputs(){
        const namePattern = /^[A-za-z\s]+$/;
        const idPattern = /^[0-9]+$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const contactPattern = /^[0-9]{10}$/;

        if (!Sname.value.trim()|| !id.value.trim()|| !email.value.trim()|| !contactNo.value.trim()){
            alert("All fields are mandatory.");
            return false;
        }
        console.log(Sname.value.trim()||id.value.trim()||email.value.trim()||contactNo.value.trim());

        if (!emailPattern.test(email.value.trim())){
            alert("Please enter a valid email address.");
            return false;
        }
        if (!contactPattern.test(contactNo.value.trim())){
            alert("Contact No. must be 10 digits long.");
            return false;
        }
        return true;
    }
    // saving students Data

    function saveToLocalStorage(student) {
        let students = localStorage.getItem("students");
        students = students ? students + "\n" + student : student;
        localStorage.setItem("students", students);
    }
// loading student record
    function loadRecords(){
        let students = localStorage.getItem("students");
        if (students) {
            students.split("\n").forEach(displayStudent);
        }
    }

    function displayStudent(student) {
        const [name, id, email, contactNo] = student.split("|");
        const show = document.createElement("div");
        show.classList.add("showData");

        show.innerHTML = ` <p><strong>Name:</strong> ${name}</p>
        <p><strong>ID:</strong> ${id}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact No:</strong> ${contactNo}</p>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>`;

        show.querySelector(".delete-btn").addEventListener("click",function(){
            show.remove();
            deleteFromLocalStorage(student);
        });


        show.querySelector(".edit-btn").addEventListener("click", function(){
            editStudent(show, student);
        });
        const outputDiv = document.getElementById("outputDiv"); 
if (!outputDiv) {
    console.error("Error: The 'output' container is missing!");
    return; 
}
outputDiv.appendChild(show);
    }
    

    function  deleteFromLocalStorage(oldStudent) {
        let students = localStorage.getItem("students");
    
        
        if (!students) {
            console.warn("No student data found in localStorage.");
            return;
        }
    
        
        students = String(students); 
        
        
        students = students.split("\n");
    
        
        students = students.filter(student => student !== oldStudent);
    
       
        localStorage.setItem("students", students.join("\n"));
    }
    // edit student
    function editStudent(show, oldStudent){
        const [oldName, oldId, oldEmail, oldContact] = oldStudent.split("|");
        const newName = prompt("Edit Name:", oldName);
        const newId = prompt("Edit ID:", oldId);
        const newEmail = prompt("edit Email:", oldEmail);
        const newContact = prompt("Edit COntact:",oldContact);
        if (newName === null || newName.trim() === "" ||
    newId === null || newId.trim() === "" ||
    newEmail === null || newEmail.trim() === "" ||
    newContact === null || newContact.trim() === "") {
    alert("Fields cannot be empty.");
    return;
}

       const updatedStudent = `${newName}|${newId}|${newEmail}|${newContact}`;
       deleteFromLocalStorage(oldStudent);
       saveToLocalStorage(updatedStudent);

       show.innerHTML = `<p><strong>Name:</strong> ${newName}</p>
       <p><strong>ID:</strong> ${newId}</p>
       <p><strong>Email:</strong> ${newEmail}</p>
       <p><strong>Contact No:</strong> ${newContact}</p>
       <button class="edit-btn">Edit</button>
       <button class="delete-btn">Delete</button>`;

       show.querySelector(".delete-btn").addEventListener("click", function () {
        show.remove();
        deleteFromLocalStorage(updatedStudent);
       });

       show.querySelector(".edit-btn").addEventListener("click", function () {
        editStudent(show, updatedStudent);
       });


    }

 