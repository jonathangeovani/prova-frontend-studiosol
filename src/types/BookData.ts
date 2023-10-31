type BookData = {
  data: {
    book: {
      name: string;
      author: {
        name: string;
      };
      cover: string;
      description: string;
      isFavorite: boolean;
    };
  };
};
