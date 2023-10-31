type FavoriteBooksData = {
  data: {
    favoriteBooks: [
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
