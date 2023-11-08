import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  let result;
  if(!user){
    result='Please Login!!!'
  }else{
    result=`Welcome ${user.username}`
  }
  return(
    <div>{result}</div>
  )
};
export default Profile;
