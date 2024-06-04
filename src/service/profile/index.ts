import { IPayloadProfileData } from "@/types/types";
import API from "../api";

const getProfile = async () => {
  const response = await API.get({
    url: "getProfile",
  });
  return response;
};

const updateProfile = async (payload: IPayloadProfileData) => {
  const response = await API.put({
    url: "updateProfile",
    payload,
  });
  return response;
};

export default { getProfile, updateProfile };
