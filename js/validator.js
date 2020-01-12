function validateForm(){
    let firstName = document.forms['contactForm']['firstName'].value;
    if (firstName === ""){
        alert("Name must be filled out");
        return false;
    }
}