import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="w-full text-center bg-slate-700 text-white text-2xl p-10">
      User: {userId}
    </div>
  );
};
export default User;
