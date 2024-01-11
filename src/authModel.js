import { action, createStore } from "easy-peasy";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth } from "./firebase-conf";

const authModel = {
  user: null,
  setUser: action((state, payload) => {
    state.user = payload;
  }),

  auth: {
    signUp: action(async (state, { email, password }) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        state.setUser(userCredential.user);
        console.log(userCredential);
      } catch (err) {
        console.log(err.message);
      }
    }),

    login: action(async (state, { email, password }) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        state.setUser(userCredential.user);
      } catch (err) {
        console.log(err.message);
      }
    }),

    logout: action(async (state) => {
      try {
        await signOut(auth);
        state.setUser(null);
      } catch (err) {
        console.log(err.message);
      }
    }),
  },
};

const store = createStore(authModel);

export default store;
