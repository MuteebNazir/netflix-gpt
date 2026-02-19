import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import{addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        //* An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        //* User Is signed in
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        //* Profile updated!
        navigate("/browse");
      } else {
        //* User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      //* Cleanup the listener on unmount
      unsubscribe();
    }
  }, []);

  return (
    <div className="absolute w-screen px-12 py-1 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48"
        src={LOGO}
        alt="Logo"
      />
     { user && <div className="flex p-2">
      <button className="py-2 px-4 mx-4 my-4 mr-8 mt-2 bg-red-500 text-white rounded-lg flex justify-between font-semibold font-sans">GPT Search</button>
        <img
          className="w-12 h-12 rounded-e-md mr-4"
          alt="usericon"
          src={user?.photoURL}
        />
        <button onClick={handleSignOut} className=" text-white pb-4 text-md text-md font-semibold">
          {" "}
          Sign Out{" "}
        </button>
      </div>
      }
    </div>
  );
};

export default Header;
