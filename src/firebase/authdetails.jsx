/* eslint-disable no-unused-vars */
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useNavigate, redirect } from "react-router-dom";
import Splash from "../pages/splash";

const AuthDetails = ({ navigation }) => {
  let navigate = useNavigate();

  const loader = async () => {
    const listen = await onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("triggered")
        // return redirect("/splash");
        navigation.navigate('./Splash')
        // navigate('/splash', { replace: true });
      }
    });

    return () => {
      listen();
    };
  };
  // useEffect(() => {
  //   const listen = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log("triggered")
  //       navigate('/splash', { replace: true });
  //     }
  //   });

  //   return () => {
  //     listen();
  //   };
  // });
};

export default AuthDetails;