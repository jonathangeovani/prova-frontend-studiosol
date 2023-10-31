type FavoriteAuthorsData = {
  data: {
    favoriteAuthors: [
      {
        id: string;
        name: string;
        picture: string;
        booksCount: number;
      }
    ];
  };
};
