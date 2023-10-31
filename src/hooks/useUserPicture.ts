import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getUserPicture = (): AxiosPromise<UserPictureData> => {
  return axios.post(API_URL, {
    headers: { "content-type": "application/json" },
    query: `
      query UserPicture {
        userPicture
      }
        `,
  });
};

export const useUserPicture = () => {
  const query = useQuery({
    queryFn: getUserPicture,
    queryKey: ["user-picture"],
    retry: 2,
  });

  return {
    ...query,
    avatar: query.data?.data.data.userPicture,
  };
};
