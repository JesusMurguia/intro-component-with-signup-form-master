window.onload = function() {
    let button=document.getElementById("submit");
    let firstName=document.getElementById("firstName");
    let lastName=document.getElementById("lastName");
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    let errorFirstName=document.getElementById("error-firstName");
    let errorLastName=document.getElementById("error-lastName");
    let errorEmail=document.getElementById("error-email");
    let errorPassword=document.getElementById("error-password");

    

    button.addEventListener("click",()=>{

        cleanErrors();

        if(firstName.value==""){
            firstName.classList.toggle("invalid-email-border");
            errorFirstName.classList.toggle("hidden");
        }
        if(lastName.value==""){
            lastName.classList.toggle("invalid-email-border");
            errorLastName.classList.toggle("hidden");
        }
        if(email.value==""){
            email.classList.toggle("invalid-email-border");
            errorEmail.classList.toggle("hidden");
        }
        if(password.value==""){
            password.classList.toggle("invalid-email-border");
            errorPassword.classList.toggle("hidden");
        }
    });
    const cleanErrors = () => {
        firstName.classList.remove("invalid-email-border");
        lastName.classList.remove("invalid-email-border");
        email.classList.remove("invalid-email-border");
        password.classList.remove("invalid-email-border");
    
        errorFirstName.classList.add("hidden");
        errorLastName.classList.add("hidden");
        errorEmail.classList.add("hidden");
        errorPassword.classList.add("hidden");
    
    }
}

