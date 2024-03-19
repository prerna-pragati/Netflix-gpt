import Header from "./Header";
import { useState, useRef } from "react";
import {validateData} from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { IMAGE_AVATAR,  BACKGROUND_IMAGE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [signUpToggle, setsignUpToggle] = useState(true);
  const [errorMsg, seterrorMsg] = useState("");
  const email = useRef();
  const  password = useRef();
  const name = useRef();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const togglesignUpToggle = () => {
    setsignUpToggle(!signUpToggle);
  }
  const handlesubmitData =  () => {
    const validationmsg = validateData(email.current.value, password.current.value);
    seterrorMsg(validationmsg);
    if(validationmsg) {
      return;
    }
    if(!signUpToggle) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: IMAGE_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterrorMsg(error.message);
            });
        })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMsg(errorCode + " " + errorMessage);
  });} else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          
          // navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMsg(errorCode + " " + errorMessage);
        });

    }
    
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMAGE} alt="Logo" />
      </div>
      <div >
      <form className="bg-black absolute p-12 my-36 w-1/4 mx-auto right-0 left-0" onSubmit={(e) => {e.preventDefault();}}>
          <h1 className="text-2xl text-white">{signUpToggle ? "Sign In" : "Sign Up"}</h1>
          {!signUpToggle ? 
          <input type="text" placeholder="Full Name" className="p-2 my-4 w-full" ref={name}/>
          : ''}
          <input type="text" placeholder="Email" className="p-2 my-4 w-full" ref={email}/>
          <input type="password" placeholder="Password" className="p-2 my-4  w-full" ref={password} />
          {errorMsg ? <p className="text-red-700 font-bold">{errorMsg}</p> : ''}
          <div>
          <button  className="p-2 my-4 text-white bg-red-700 rounded-md  w-full" onClick={handlesubmitData}>{signUpToggle ? "Sign In" : "Sign Up"}</button>
          </div>
        <div>
          <p className="text-white text-sm cursor-pointer" onClick={togglesignUpToggle}>{signUpToggle ? "New to Netflix? Sign up now" : "Already a user? Sign in Now"}.</p>
        </div>
        </form>
      </div>
        
      </div>
  )
}

export default Login;