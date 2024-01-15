import { useRef, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../img/Vector.svg";
import "../style/signup.css";

const SignIn = () => {
  const emailRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  // States for email
  const email = useStoreState((state) => state.email);
  const setEmail = useStoreActions((actions) => actions.setEmail);

  // State for password
  const password = useStoreState((state) => state.password);
  const setPassword = useStoreActions((actions) => actions.setPassword);

  // States for errors
  const errorMessage = useStoreState((state) => state.errorMessage);
  const setErrorMessage = useStoreActions((actions) => actions.setErrorMessage);

  // Focus on email input
  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  // Check for error message
  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  // Use useStoreActions to get signUp action
  const signIn = useStoreActions((actions) => actions.signIn);

  // Control submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // call the singUp function from easy-peasy
    await signIn({ email, password });
    navigate('/home');
  };

  return (
    <section className="SignUp">
      <figure>
        <img src={logo} alt="logo" />
        <figcaption>Chatify</figcaption>
      </figure>

      <h1>Welcome</h1>
      <p>Sign in to Chatify</p>

      <p
        ref={errRef}
        className={errorMessage ? "errMsg" : "offscreen"}
        aria-live="assertive"
      >
        {errorMessage}
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            autoComplete="off"
            required
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          disabled={!email || !password ? true : false}
        >
          Sign In
        </button>

        <p>
          Don't have an account? <Link to="/">Sign Up</Link>
        </p>
      </form>
    </section>
  );
};

export default SignIn;
