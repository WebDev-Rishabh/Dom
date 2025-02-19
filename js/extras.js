const Sname = document.getElementById("fName") ;
const id = document.getElementById("id") ;
const email = document.getElementById("email") ;
const contactNo = document.getElementById("contactNo") ;
const submit = document.getElementById("submit") ;
const outputDiv = document.getElementById("output") ;
// const showName = document.getElementById("showName") ;
// const showId = document.getElementById("showId") ;
// const showEmail = document.getElementById("showEmail") ;
// const showContact = document.getElementById("showContact") ;
// submit.addEventListener("click", showform);

if (submit) {
    submit.addEventListener("click", showform);
}

function showform(event) {
    
    event.preventDefault();
    if (Sname!==""&&id!==""&&email!==""&&contactNo!==""){
    console.log(Sname.value, id.value, email.value, contactNo.value);
    // showName.innerHTML = Sname.value;
    //   showId.innerHTML = id.value;
    //   showEmail.innerHTML = email.value;
    //   showContact.innerHTML = contactNo.value;
      const show = document.createElement("div");
      show.classList.add("showData")

        const name = document.createElement("p");
        name.textContent = `Name: ${Sname.value}`;

        const Sid = document.createElement("p");
        Sid.textContent = `ID: ${id.value}`;

        const Semail = document.createElement("p");
        Semail.textContent = `Email: ${email.value}`;

        const Scont = document.createElement("p");
        Scont.textContent = `Contact No: ${contactNo.value}`;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        deleteButton.classList.add("Dbutton");

        deleteButton.addEventListener("click", deleteDiv);

        function deleteDiv(e){
            const item = e.target;
            if (item.classList[0]==="Dbutton"){
            const parent = item.parentElement;
            parent.remove();
            }
        }

        show.appendChild(name);
        show.appendChild(Sid);
        show.appendChild(Semail);
        show.appendChild(Scont);
        show.appendChild(deleteButton);

        // Append the new data to the document (e.g., inside a div with id="output")
        document.body.appendChild(show);
    } else {
        return;
    }
}
 const editName = document.getElementById("editName");
 const editId = document.getElementById("editId");
 const editEmail = document.getElementById("editEmail");
 const editContact = document.getElementById("editContact");