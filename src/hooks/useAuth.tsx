"use client";
import { ReactNode, createContext, useContext, useMemo } from "react";
import { useLocalStorage } from ".";
import { useRouter } from "next/navigation";

type Props = {
  children?: ReactNode;
};

type ResponseLogin = {
  access_token: string;
};

interface User extends ResponseLogin {
  email: string;
  username?: string;
}

type IAuthContext = {
  user?: User;
  login: (d: User, ttl?: number | any) => void;
  logout: () => void;
};

const initUser = {
  email: "",
  username: "",
  access_token: "",
};

const initContext = {
  user: initUser,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<IAuthContext>(initContext);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useLocalStorage("user", null);
  const router = useRouter();

  // call this function when you want to authenticate the user
  const login = async (data: any, ttl: any = null) => {
    setUser(data, ttl);
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export default useAuth;
