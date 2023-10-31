import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getFavoriteBooks = (): AxiosPromise<FavoriteBooksData> => {
  return axios.post(API_URL, {
    headers: { "content-type": "application/json" },
    query: `
        query FavoriteBooks {
            favoriteBooks {
            id
            cover
            name
            author {
                name
            }
            }
        }
        `,
  });
};

export const useFavoriteBooks = () => {
  const query = useQuery({
    queryFn: getFavoriteBooks,
    queryKey: ["favorite-books"],
    retry: 2,
  });

  return {
    ...query,
    books: query.data?.data.data.favoriteBooks,
  };
};
