// const axios = require('axios');
var passwordIsTheSame = false;

function sendRequest(username, email, password){
    if(passwordIsTheSame){
      axios.post('http://localhost:3000/register/addUser', {
            username: username,
            email: email,
            password: password
        })
        .then(function(response){
            if(response.data == "User not added"){
                alert("User not added");
            } else {
                alert("User created");
                window.location.href = "http://localhost:3000/login";
            }
        })
        .catch(function(error){
            console.log(error);
        });  
    }else{
        alert("Passwords do not match");
    }
    
}

function checkPassword(){
    var password = document.getElementById("password_input").value;
    var confirmPassword = document.getElementById("password_input").value;

    if(password != confirmPassword){
        document.getElementById("password_input").style.borderColor = "red";
        document.getElementById("repeat_input").style.borderColor = "red";
        passwordIsTheSame = false;
    } else {
        document.getElementById("password_input").style.borderColor = "green";
        document.getElementById("repeat_input").style.borderColor = "green";
        passwordIsTheSame = true;
    }
}

function validateForm(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if(username == "" || email == "" || password == "" || confirmPassword == ""){
        alert("Please fill out all fields");
        return false;
    }

    if(password != confirmPassword){
        alert("Passwords do not match");
        return false;
    }

    sendRequest(username, email, password);
    return true;
}