export type Movie = {
  imdbID: string;
  Type: string;
  Year: string;
  Poster: string;
  Title: string;
};

export type ParsedMovie = {
  id: string;
  title: string;
  year: string;
  poster: string;
  type: string;
};

export type Movies = Array<ParsedMovie>;
