function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
  
  document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
  
    if (!gender) {
      alert("Please select gender.");
      return;
    }
  
    if (mobile.length !== 10 || isNaN(mobile)) {
      alert("Mobile number must be exactly 10 digits.");
      return;
    }
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    const userData = {
      firstName,
      lastName,
      dob,
      gender,
      mobile,
      email,
    };
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
  
    window.location.href = "display.html";
  });
  