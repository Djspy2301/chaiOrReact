import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import PassContext from "../../context/Pass/PassContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const { pass } = useContext(PassContext);
  const { setPass } = useContext(PassContext);

  const submitHandle = (e) => {
    e.preventDefault();
    if (username && password != "") {
      setUser({ username, password });
      setPass([]);
    }else{
      setPass("Please Enter password")
      setUser(null)
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
      <div >{pass}</div>
      <br />
      <button onClick={submitHandle}>Submit</button>
    </div>
  );
};
export default Login;
