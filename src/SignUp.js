import { useRef, useState, useEffect, useTransition } from "react";
import { faInfoCircle, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./img/Vector.svg";
import "./style/signup.css";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();

  // States for username
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

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

  // State for valid input
  const [inputBorder, setInputBorder] = useState("#2B2E33");

  // Focus on username input
  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  // Check for valid username
  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

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
  }, [user, pwd, matchPwd]);

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

      <form>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            autoComplete="off"
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            ref={userRef}
            value={user}
            onChange={(e) => setUser(e.target.value)}
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            className={validName ? "valid" : ""}
          />
          <p
            id="uidnote"
            className={
              userFocus && user && !validName ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />4 to 24 characters. Must
            begin with a letter. Letters, numbers, underscores, hyphens allowed.
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

        <button>Sign Up</button>

        <p>
          Already have an account? <a href="#">Log in</a>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
