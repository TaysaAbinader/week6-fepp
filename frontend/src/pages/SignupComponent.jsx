import useSignup from "../hooks/useSignup";
import useField from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const email = useField("email");
  const password = useField("password");
  const password2 = useField("password");

  const {handleSignup} =useSignup(setIsAuthenticated);

  //The signup form includes handleclicka Confirm Password (`password2`) field.
//Frontend validation ensures that the user cannot submit the form unless
//both passwords match, providing immediate feedback password do not match.

  const handleClick = async () =>{
    if(password.value !== password2.value){
      alert("Passwords do not match!");
      return;
    }
    
    //call signup with values from useField
    handleSignup(email.value, password.value);

  };


  return (
    <div className="form-container">
      <h2>Signup</h2>
      <label>
        email:
        <input
          {...email}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          {...password}
        />
      </label>

    <label>
        Confirm Password:
        <input
          {...password2}
        />
        </label>
      <br />
      <button onClick={handleClick}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;

