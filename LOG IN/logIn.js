import {getAuth,signInWithEmailAndPassword} from "../firebase.js";




// login ka code
const login = ()=>{
    console.log(email.value,password.value)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        console.log(userCredential,"Log in Successfully!")
        alert("Redirecting you to your profile in 3 sec, click  OK to proceed!")
      setTimeout(() => {
        window.location.href = "../home page/home.html";
      }, 3000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage,"-->User does not exist, Create Account by clicking on Sign Up ")

        alert("User does not exist, Create Account by clicking on Sign Up")
      });
}


const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn=document.getElementById("loginbtn");

loginBtn.addEventListener("click",login);