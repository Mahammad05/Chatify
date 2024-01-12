import { useRef, useState, useEffect } from "react";
import { useStoreActions } from "easy-peasy";
import { Link } from "react-router-dom";
import logo from "../img/Vector.svg";
import "../style/signup.css";

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignIn = () => {
  const emailRef = useRef();
  const errRef = useRef();

  // States for email
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  // State for password
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // States for errors
  const [errMsg, steErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // Focus on email input
  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  // Check for valid email
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  // Check for valid password and match password
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
  }, [pwd]);

  // Check for error message
  useEffect(() => {
    steErrMsg("");
  }, [email, pwd]);

  // Use useStoreActions to get signUp action
  const signIn = useStoreActions((actions) => actions.signIn);

  // Control submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Invalid entry
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      steErrMsg("Invalid Entry");
      return;
    }

    // call the singUp function from easy-peasy
    await signIn({ email, password: pwd });
  };

  return (
    <section className="SignUp">
      <figure>
        <img src={logo} alt="logo" />
        <figcaption>Chatify</figcaption>
      </figure>

      <h1>Welcome</h1>
      <p>Sign In to Chatify</p>

      <p
        ref={errRef}
        className={errMsg ? "errMsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            autoComplete="off"
            required
            aria-invalid={validEmail ? "false" : "true"}
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            className={validEmail ? "valid" : ""}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            required
            aria-invalid={validPwd ? "false" : "true"}
            onChange={(e) => setPwd(e.target.value)}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            className={validPwd ? "valid" : ""}
          />
        </label>

        <button
          disabled={!validEmail || !validPwd ? true : false}
        >
          Sign In
        </button>

        <p>
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </form>
    </section>
  );
};

export default SignIn;
