import { createContext, useState } from "react";

let AuthContext = createContext();

export function AuthContextprovider  ({ children }){
  let [auth, setAuth] = useState({
    token: null,
    isloggedin: false,
  });
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};


export function AuthContextprovider ({children}){
  
}