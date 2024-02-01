import { useRef, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../img/logo_black.svg";
import "../style/signup.css";

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
  const emailRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  // STATE FOR EMAIL
  const email = useStoreState((state) => state.email);
  const setEmail = useStoreActions((actions) => actions.setEmail);
  const validEmail = useStoreState((state) => state.validEmail);
  const setValidEmail = useStoreActions((actions) => actions.setValidEmail);
  const emailFocus = useStoreState((state) => state.emailFocus);
  const setEmailFocus = useStoreActions((actions) => actions.setEmailFocus);

  // STATE FOR PASSWORD
  const password = useStoreState((state) => state.password);
  const setPassword = useStoreActions((actions) => actions.setPassword);
  const validPassword = useStoreState((state) => state.validPassword);
  const setValidPassword = useStoreActions((actions) => actions.setValidPassword);
  const passwordFocus = useStoreState((state) => state.passwordFocus);
  const setPasswordFocus = useStoreActions((actions) => actions.setPasswordFocus);

  // STATE FOR CONFIRM PASSWORD
  const matchPassword = useStoreState((state) => state.matchPassword);
  const setMatchPassword = useStoreActions((actions) => actions.setMatchPassword);
  const validMatch = useStoreState((state) => state.validMatch);
  const setValidMatch = useStoreActions((actions) => actions.setValidMatch);
  const matchFocus = useStoreState((state) => state.matchFocus);
  const setMatchFocus = useStoreActions((actions) => actions.setMatchFocus);

  // STATE FOR ERRORS
  const errorMessage = useStoreState((state) => state.errorMessage);
  const setErrorMessage = useStoreActions((actions) => actions.setErrorMessage);

  // SUCCESSFUL AUTHENTICATION
  const success = useStoreState((state) => state.success);
  const setSuccess = useStoreActions((actions) => actions.setSuccess);

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
    const result = PWD_REGEX.test(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  // Check for error message
  useEffect(() => {
    setErrorMessage("");
  }, [email, password, matchPassword]);

  // Use useStoreActions to get signUp action
  const signUp = useStoreActions((actions) => actions.signUp);

  // Control submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Invalid entry
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrorMessage("Invalid Entry");
      return;
    }

    // call the singUp function from easy-peasy
    await signUp({ email, password });
    navigate('/home');
  }

  return (
    <section className="SignUp">
      <figure>
        <img src={logo} alt="logo" />
        <figcaption>Chatify</figcaption>
      </figure>

      <h1>Welcome</h1>
      <p>Sign up to Chatify</p>

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
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="uidnote"
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            className={validEmail ? "valid" : ""}
          />
          <p
            id="uidnote"
            className={
              emailFocus && email && !validEmail ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />Please use a valid email address. Your email address should be at least three characters long and follow a standard format, for example: "example@example.com".
          </p>
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            required
            aria-invalid={validPassword ? "false" : "true"}
            aria-describedby="pwdnote"
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            className={validPassword ? "valid" : ""}
          />
          <p
            id="pwdnote"
            className={passwordFocus && !validPassword ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>
        </label>
        <label htmlFor="confirm_password">
          Confirm password
          <input
            type="password"
            id="confirm_password"
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onChange={(e) => setMatchPassword(e.target.value)}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            className={validMatch && matchPassword ? 'valid' : ''}
          />
          <p
            id="confirmnote"
            className={matchFocus && !validMatch ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password input field.
          </p>
        </label>

        <button id="signup-btn" disabled={!validEmail || !validPassword || !validMatch ? true : false}>Sign Up</button>

        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
