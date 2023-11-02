import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Djspy2301")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center bg-slate-700 text-white p-4 text-3xl">
      <div className="flex flex-col items-center">
        <img src={data.avatar_url} alt="Github Avatar" width={500} />
        Name: {data.name}
      </div>
      Github Follower: {data.followers}
      <span className="m-56" />
      Github Following: {data.following}
    </div>
  );
};
export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Djspy2301");
  return response.json();
};
