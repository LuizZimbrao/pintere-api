import React, { useState } from "react";
import { app } from "../../services/FirebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const auth = getAuth(app);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) return;

    if (!password) return;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userInfo = userCredential.user;
        localStorage.setItem("user", JSON.stringify(userInfo));

        if (!userInfo.accessToken) return;
        
        navigate("/add");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("errorCode", errorCode)
        console.log("errorMessage", errorMessage)
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        placeholder="E-mail"
        onChange={(element) => setEmail(element.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(element) => setPassword(element.target.value)}
      />
      <input type="submit" />
    </form>
  )
}

export { LoginForm }; 
