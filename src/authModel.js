import { thunk, action, createStore } from "easy-peasy";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "./firebase-conf";

const performAuthAction = async (authFunction, actions, { email, password }) => {
  try {
    const userCredential = await authFunction(auth, email, password);
    actions.setUser(userCredential.user);
    console.log(userCredential.user);
  } catch (error) {
    console.log(`Authentication failed: ${error.message}`);
  }
}

const authModel = {
  user: {},
  email: "",
  validEmail: false,
  emailFocus: false,
  password: "",
  validPassword: false,
  passwordFocus: false,
  matchPassword: "",
  validMatch: false,
  matchFocus: false,
  errorMessage: "",
  success: false,

  setUser: action((state, payload) => {
    state.user = payload;
  }),

  setEmail: action((state, payload) => {
    state.email = payload;
  }),

  setValidEmail: action((state, payload) => {
    state.validEmail = payload;
  }),

  setEmailFocus: action((state, payload) => {
    state.emailFocus = payload;
  }),

  setPassword: action((state, payload) => {
    state.password = payload;
  }),

  setValidPassword: action((state, payload) => {
    state.validPassword = payload;
  }),

  setPasswordFocus: action((state, payload) => {
    state.passwordFocus = payload;
  }),

  setMatchPassword: action((state, payload) => {
    state.matchPassword = payload;
  }),

  setValidMatch: action((state, payload) => {
    state.validMatch = payload;
  }),

  setMatchFocus: action((state, payload) => {
    state.matchFocus = payload;
  }),

  setErrorMessage: action((state, payload) => {
    state.errorMessage = payload;
  }),

  setSuccess: action((state, payload) => {
    state.success = payload;
  }),
  
  signUp: thunk(async (actions, payload) => {
    await performAuthAction(createUserWithEmailAndPassword, actions, payload);
  }),

  signIn: thunk(async (actions, payload) => {
    await performAuthAction(signInWithEmailAndPassword, actions, payload);
  }),

  logout: thunk(async (actions) => {
    await performAuthAction(signOut, actions, {});
  }),

  init: thunk(async (actions) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user ? actions.setUser(user) : actions.setUser({});
    });

    return () => unsubscribe();
  }),

  onInitialize: thunk(async (actions) => {
    await actions.init();
  })
};

const store = createStore(authModel);

export default store;
