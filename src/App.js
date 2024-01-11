import { StoreProvider } from "easy-peasy";
import authModel from "./authModel";
import SignUp from "./companents/SignUp";

function App() {
  return (
    <div className="App">
      <StoreProvider store={authModel}>
        <SignUp />
      </StoreProvider>
    </div>
  );
}

export default App;
