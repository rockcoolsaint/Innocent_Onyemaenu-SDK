import { Base } from "../base";
import { Movie, Quote } from "./types";

const resourceName = "movie";

export class Movies extends Base {
  getMovies(): Promise<Movie[]> {
    return this.request(`/${resourceName}`);
  }

  getMovieById(id: string): Promise<Movie> {
    return this.request(`/${resourceName}/${id}`);
  }

  getMovieQuotes(id: string): Promise<Quote[]> {
    return this.request(`/${resourceName}/${id}/quote`);
  }
}