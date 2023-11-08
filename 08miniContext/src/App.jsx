import UserContextProvider from "./context/UserContextProvider";
import PassContextProvider from "./context/Pass/PassContextProvider";
import "./App.css";
import { Login, Profile } from "./components";

function App() {
  return (
    <PassContextProvider>
    <UserContextProvider>
      <h1>React: Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
    </PassContextProvider>
  );
}

export default App;
