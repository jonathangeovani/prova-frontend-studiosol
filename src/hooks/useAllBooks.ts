import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getAllBooks = (): AxiosPromise<AllBooksData> => {
  return axios.post(API_URL, {
    headers: { "content-type": "application/json" },
    query: `
        query AllBooks {
            allBooks {
              id
              cover
              name
              author{
                name
              }
              category
            }
          }
        `,
  });
};

export const useAllBooks = () => {
  const query = useQuery({
    queryFn: getAllBooks,
    queryKey: ["all-books"],
    retry: 2,
  });

  return {
    ...query,
    books: query.data?.data.data.allBooks,
  };
};
