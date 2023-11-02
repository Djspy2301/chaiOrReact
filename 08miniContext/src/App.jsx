import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import { Login, Profile } from "./components";

function App() {
  return (
    <UserContextProvider>
      <h1>React: Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
