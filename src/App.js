import { StoreProvider } from "easy-peasy";
import authModel from "./authModel";
import SignUp from "./companents/SignUp";
import SignIn from "./companents/SignIn";
import Home from "./companents/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/SignUp',
      element: <SignUp />
    },
    {
      path: '/SignIn',
      element: <SignIn />
    }
  ]); 


  return (
    <div className="App">
      <StoreProvider store={authModel}>
        <SignIn />
      </StoreProvider>
    </div>
  );
}

export default App;
