function getInfo(event) {
    event.preventDefault(); 

    let email = document.getElementById("email_name").value;
    let password = document.getElementById("passwordbox").value;
  
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  
    window.location.href = "./pagenotfound.html";
  }
  