import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {

    const handleOnline = () => {
      setIsOnline(true);
    }
    const handleOffline = () => {
      setIsOnline(false);
    }
    addEventListener("online", handleOnline);
    addEventListener("offline", handleOffline);

    return ()=>{
      window.removeEventListener("online",handleOnline);
      window.removeEventListener("offline", handleOffline);
    }
  }, []);

  return isOnline; // returns true or false depending on internet connnection
};

export default useOnline;
