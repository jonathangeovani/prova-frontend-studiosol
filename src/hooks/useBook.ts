import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getBook = (bookId: string): AxiosPromise<BookData> => {
  return axios.post(API_URL, {
    headers: { "content-type": "application/json" },
    query: `
        query Book {
            book(id: ${bookId}) {
                cover
                name
                author {
                    name
                }
                isFavorite
                description
            }
        }
        `,
  });
};

export const useBook = (bookId: string) => {
  const query = useQuery({
    queryFn: () => getBook(bookId),
    queryKey: ["book-details"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data.data.book,
  };
};
