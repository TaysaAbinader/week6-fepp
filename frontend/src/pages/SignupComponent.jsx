import { useState } from "react";
import useSignup from "../hooks/usesSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const { email, setEmail, password, setPassword, handleSignup } = useSignup(setIsAuthenticated);
  const [password2, setPassword2] = useState("");

  //The signup form includes handleclicka Confirm Password (`password2`) field.
//Frontend validation ensures that the user cannot submit the form unless
//both passwords match, providing immediate feedback password do not match.

  const handleClick = async () =>{
    if(password !== password2){
      alert("Passwords do not match!");
    }else{
      handleSignup();
    }

  }


  return (
    <div className="form-container">
      <h2>Signup</h2>
      <label>
        email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

    <label>
        Confirm Password:
        <input
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        </label>
      <br />
      <button onClick={handleClick}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;

