document.getElementsByClassName('a-form').addEventListener('submit', function(event){
    event.preventDefault();

    let name = document.getElementById('name').value;
    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    let confirmPwd = document.getElementById('confirmPwd').value;

    if(name === '' || userName === '' || password === '' || confirmPwd === ''){
        document.getElementById('errorMessage').textContent = 'Please fill out the fields.';
        document.getElementById('errorMessage').style.display = 'block';
    }
    else {
        document.getElementsByClassName('a-form').submit();
      }
})

document.getElementsByClassName('a-form1').addEventListener('submit', function(event){

    event.preventDefault();

    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;

    if(userName === '' || password === ''){
        document.getElementById('errorMessage1').textContent = 'Please fill out the fields.';
        document.getElementById('errorMessage1').style.display = 'block';
    }
    else {
        document.getElementsByClassName('a-form1').submit();
      }
    
})

let signupForm = document.getElementById("signUpForm");
let signinForm = document.getElementById("signInForm");
let switchForm = document.getElementById("pageRedirect");

switchForm.addEventListener("click", function(event) {
  event.preventDefault(); 

 
    signupForm.style.display = "block";
    signinForm.style.display = "none";
    switchForm.innerHTML = signupForm;
  
});

//linking signIn and SignUp page

function openSignInModal() {
    let modal = document.getElementById('exampleModal1');
    modal.style.display = 'block';
  }

  function openSignUpModal() {
    let modal = document.getElementById('exampleModal');
    modal.style.display = 'block';
  }

