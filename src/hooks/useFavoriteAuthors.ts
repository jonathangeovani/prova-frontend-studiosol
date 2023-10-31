import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getFavoriteAuthors = (): AxiosPromise<FavoriteAuthorsData> => {
  return axios.post(API_URL, {
    headers: { "content-type": "application/json" },
    query: `
      query FavoriteAuthors {
        favoriteAuthors {
          id
          name
          picture
          booksCount
        }
      }
        `,
  });
};

export const useFavoriteAuthors = () => {
  const query = useQuery({
    queryFn: getFavoriteAuthors,
    queryKey: ["favorite-authors"],
    retry: 2,
  });

  return {
    ...query,
    authors: query.data?.data.data.favoriteAuthors,
  };
};
