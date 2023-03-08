import { Base } from "../base";
import { Movie, Quote } from "./types";
export declare class Movies extends Base {
    getMovies(): Promise<Movie[]>;
    getMovieById(id: string): Promise<Movie>;
    getMovieQuotes(id: string): Promise<Quote[]>;
}
