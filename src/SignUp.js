import logo from './img/Vector.svg'
import './style/signup.css'

const SignUp = () => {
  return (
    <div className='SignUp'>
      <section className='info'>
        <figure>
          <img src={logo} alt="logo" />
          <figcaption>Chatify</figcaption>
        </figure>

        <h1>Welcome to Chatify</h1>
        <p className='description'>
          Chatify is a chatbot

          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ad ab aliquam commodi deserunt pariatur maiores quos <br /> voluptatibus consectetur, tempora eligendi sint autem <br /> laudantium a nemo eum architecto, doloremque sit delectus! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, obcaecati!
        </p>
      </section>

      <section className='signup-card'>
        <div className='card'>
          <h1>Sign Up</h1>

          <form>
            <label htmlFor="email">
              Email
              <input 
                type="email"
                id='email'
                required 
              />
            </label>

            <label htmlFor="username">
              Username
              <input 
                type="text" 
                id='username' 
                autoComplete='off' 
                required 
              />
            </label>

            <label htmlFor="password">
              Password
              <input 
                type="password" 
                id="password"
                required
              />
            </label>

            <label htmlFor="confirm_password">
              Confirm password
              <input 
                type="password" 
                id="confirm_password"
                required 
              />
            </label>

            <button>Sign Up</button>

            <label id='terms' htmlFor="terms">
              <input 
                type="checkbox" 
                id='terms'
                required 
              />
              By clicking Sign Up, I agree that I have read and accepted the Terms of Use and Privacy Policy.
            </label>

            <hr />

            <p id='policy'>
              Protected by reCAPTCHA and subject to the Cuboid Privacy Policy and Terms of Service.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;



{/* <section className="welcome">

<img src={logo} alt="sdfvsdf" />
<h1>Welcome to Chatify</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> Asperiores temporibus perferendis <br /> quidem nostrum recusandae totam ab,<br /> beatae dolore architecto eligendi, <br />
suscipit commodi earum molestiae <br /> deserunt possimus eos ducimus tempora incidunt?</p>
</section>



<section className="SignUp">
  <h1>Sign up</h1>

  <form>
    <label htmlFor="username">
      Username
      <input type="text" id="username" autoComplete="off" required />
    </label>

    <label htmlFor="password">
      Password
      <input type="password" id="password" required />
    </label>

    <label htmlFor="confirm_password">
      Confirm Password
      <input type="password" id="confirm_password" required />
    </label>

    <p>
      Already have an account? <a href="#">Sign in</a>
    </p>

    <button>Sign Up</button>
  </form>
</section> */}