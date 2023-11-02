import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const submitHandle = (e) => {
    e.preventDefault();
    if (username && password != "") {
      setUser({ username, password });
    }
  };

  return (
    <div>
      Login:
      <br />
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="username"
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      />
      <br />
      <br />
      <button onClick={submitHandle}>Submit</button>
    </div>
  );
};
export default Login;
