import {getAuth, createUserWithEmailAndPassword} from "./firebase.js";



const register = ()=>{
console.log(email.value,password.value)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user.displayName,"-->User")
        alert(email.value+" has signed in")
        setTimeout(() => {
          window.location.href = "../LOG IN/logIn.html";
        }, 3000);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error-->", error)
        if(errorMessage){
          alert("User Already Exist,  TRY to Log in!")
        }
      });
    
}

const email = document.getElementById("email");
const password = document.getElementById("password");
const registerBtn=document.getElementById("registerbtn");

const firstName = document.querySelector("#firstName");
const lasttName = document.querySelector("#lastName");

registerBtn.addEventListener("click",register);



