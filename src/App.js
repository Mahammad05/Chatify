import { StoreProvider } from "easy-peasy";
import authModel from "./authModel";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <StoreProvider store={authModel}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </StoreProvider>
  );
}

export default App;
