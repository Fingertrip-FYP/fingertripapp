import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        return () => {
          navigate('../pages/splash.js');
        }
      }
    });

    return () => {
      listen();
    };
  });
};

export default AuthDetails;