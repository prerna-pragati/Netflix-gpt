import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import {LOGO} from "../utils/constants";
import {toggleGptSearchView} from "../utils/gptslice";


const Header = () => {
  const isGptSearch = useSelector((store) =>  store.gpt.gptSearchView);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    
  }, []);
  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-48 h60 bg-transparent" src={LOGO} alt="logo" />
        {user && <div className="flex p-2">
          <button className="bg-purple-800 text-white h-12 px-2 mx-2 rounded-lg" onClick={handleGPTSearch}>{isGptSearch ? 'Home Page' : 'GPT Search'}</button>
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>}
      </div>
      
    </div>
  )
}

export default Header