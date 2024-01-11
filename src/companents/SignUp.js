import { useRef, useState, useEffect } from "react";
import { useStore } from "easy-peasy";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../img/Vector.svg";
import "../style/signup.css";

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
  const emailRef = useRef();
  const errRef = useRef();
  const store = useStore();

  // States for email
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  // State for password
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // States for confirm password
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

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
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  // Check for error message
  useEffect(() => {
    steErrMsg("");
  }, [email, pwd, matchPwd]);

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
    await store.dispatch.auth.signUp({ email, password: pwd});
  }

  return (
    <section className="SignUp">
      <figure>
        <img src={logo} alt="logo" />
        <figcaption>Chatify</figcaption>
      </figure>

      <h1>Welcome</h1>
      <p>Sign Up to Chatify</p>

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
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onChange={(e) => setPwd(e.target.value)}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            className={validPwd ? "valid" : ""}
          />
          <p
            id="pwdnote"
            className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
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
            onChange={(e) => setMatchPwd(e.target.value)}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            className={validMatch && matchPwd ? 'valid' : ''}
          />
          <p
            id="confirmnote"
            className={matchFocus && !validMatch ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password input field.
          </p>
        </label>

        <button disabled={!validEmail || !validPwd || !validMatch ? true : false}>Sign Up</button>

        <p>
          Already have an account? <a href="#">Log in</a>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
