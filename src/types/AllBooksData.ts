type AllBooksData = {
  data: {
    allBooks: [
      {
        id: string;
        name: string;
        author: {
          name: string;
        };
        cover: string;
      }
    ];
  };
};
