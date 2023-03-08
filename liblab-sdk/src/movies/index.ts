import { Base } from "../base";
import { Movie } from "./types";

const resourceName = "movie";

export class Movies extends Base {
  getMovies(): Promise<Movie[]> {
    return this.request(`/${resourceName}`);
  }
}