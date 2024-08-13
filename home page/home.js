import {getAuth,signOut,onAuthStateChanged,sendEmailVerification } from "../firebase.js"



// login rehne dene ke liye unless clicked on logout btn
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    //    displaying email on profile
const email=document.querySelector(".email");
email.innerHTML= user.email;

// displaying verification note
const verificationPara = document.querySelector(".verificationNote")
if(user.emailVerified==false){
    verificationPara.innerHTML="(not verified)";
}

else if(user.emailVerified==true){
    verificationPara.innerHTML="(verified)";
}


   console.log(user,"-->log in")
  } else {
    console.log(user,"-->unable to login")
  }
});


const logout = ()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("We're logging you out!");
     
        window.location.href="../LOG IN/logIn.html"
   
    }).catch((error) => {
      console.log(error,"-->could not log out")
    });
}

const logoutbtn = document.getElementById("logoutbtn");
logoutbtn.addEventListener("click",logout);


// email verificaton sent
const sendEmailVerificationCode = () => {
    const user = auth.currentUser;
  
    if (user) {
      if (!user.emailVerified) {
        sendEmailVerification(user)
          .then(() => {
            alert("Verification email sent, PLease check you gmail account!");
          })
          .catch((error) => {
            console.error("Error sending verification email:", error.message);
          });
      } else {
        alert("Your email is already verified!");
      }
    } else {
      alert("No user is currently signed in.");
    }
  };
  
 
  const verificationbtn = document.getElementById("verificationbtn");
  verificationbtn.addEventListener("click", sendEmailVerificationCode);

