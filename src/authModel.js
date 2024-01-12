import { thunk, action, createStore } from "easy-peasy";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "./firebase-conf";

const authModel = {
  user: {},
  setUser: action((state, payload) => {
    state.user = payload;
  }),

  signUp: thunk(async (actions, { email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      actions.setUser(userCredential.user);
      console.log("You are signed up", userCredential.user);
    } catch (err) {
      console.log(err.message);
    }
  }),

  signIn: thunk(async (actions, { email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      actions.setUser(userCredential.user);
    } catch (err) {
      console.log(err.message);
    }
  }),

  logout: thunk(async (actions) => {
    try {
      await signOut(auth);
      actions.setUser({});
    } catch (err) {
      console.log(err.message);
    }
  }),

  init: thunk(async (actions) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        actions.setUser(user);
      } else {
        actions.setUser({});
      }
    });

    return () => unsubscribe();
  }),
};

const store = createStore(authModel);

export default store;
