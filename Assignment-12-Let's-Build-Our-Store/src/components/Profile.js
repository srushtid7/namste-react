import { useEffect, useState } from "react";
const Profile = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //API call

    const timer = setInterval(() => {
      console.log("Namaaste React OP");
    }, 1000);
    console.log("Use effect");

    return () => {
      clearInterval(timer);
      console.log("Use Effect return");
    };

  }, []);
  //console.log("render");

  return (
    <div>
      <h2>This is a profile component using Functional component way</h2>
      <h3>Name:{props.name}</h3>
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        Count
      </button>
    </div>
  );
};
export default Profile;
