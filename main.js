function getInfo(event) {
event.preventDefault();

let emailName = document.getElementById("email_name").value;
let passwordBox = document.getElementById("passwordbox").value;


localStorage.setItem('is_email_name', emailName);
localStorage.setItem('is_passwordbox', passwordBox);

}