import useLogin from "../hooks/useLogin";
import useField from "../hooks/useField";

const LoginComponent = ({ setIsAuthenticated }) => {
  const {reset: emailReset, ...email} = useField("email");
  const {reset: passwordReset, ...password} = useField("password");
  const {handleLogin} = useLogin(setIsAuthenticated);

  const handleSubmit = () => {
    handleLogin(email.value, password.value);
  }

  return (
    <div className="form-container">
      <h2>Login</h2>
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
      <br />
      <button onClick={handleSubmit}>Log In</button>
    </div>
  );
};

export default LoginComponent;
