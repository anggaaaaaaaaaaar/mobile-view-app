import API from "@/service/api";

const login = async (email: string, password: string, username: string) => {
  const response = await API.post({
    url: "login",
    payload: { email, password, username },
  });
  return response;
};

const register = async (email: string, password: string, username: string) => {
  const response = await API.post({
    url: "register",
    payload: { email, password, username },
  });
  return response;
};

export default { login, register };
