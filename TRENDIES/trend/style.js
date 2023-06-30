document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("loginModal").style.display = "block";
  });
  
 
  document.getElementById("signupBtn").addEventListener("click", function() {
    document.getElementById("loginModal").style.display = "block";
  });

  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("loginModal").style.display = "none";
  });
  
 
  window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("loginModal")) {
      document.getElementById("loginModal").style.display = "none";
    }
  });

//Sign Up

document.getElementById("signupBtn").addEventListener("click", function() {
    document.getElementById("signupmodal").style.display = "block";
  });
  
 
  document.getElementById("signupBtn").addEventListener("click", function() {
    document.getElementById("SignUpmodal").style.display = "block";
  });

  document.getElementsByClassName("close1")[0].addEventListener("click", function() {
    document.getElementById("SignUpmodal").style.display = "none";
  });
  
 
  window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("SignUpmodal")) {
      document.getElementById("SignUpmodal").style.display = "none";
    }
  });


//   loginBtn_2

document.getElementsByClassName("button_2")[0].addEventListener("click", function() {
    document.getElementById("SignUpmodal").style.display = "none";
  });
  
 
  window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("SignUpmodal")) {
      document.getElementById("SignUpmodal").style.display = "none";
    }
  });