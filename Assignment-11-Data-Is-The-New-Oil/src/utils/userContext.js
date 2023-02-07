import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy name",
    email: "email@gmail.com",
  }
});

export default UserContext;
