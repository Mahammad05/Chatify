
const SignUp = () => {
  return (
    <section>
            <h1>Sign up</h1>
            <p>Already have an account? <a href="#">Sign in</a></p>
            <form>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                autoComplete="off"
                required
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
              />

              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                required
              />

              <button>Sign Up</button>
            </form>
    </section>
  )
}

export default SignUp