import { Base } from "../base";
import { Movie } from "./types";
export declare class Movies extends Base {
    getMovies(): Promise<Movie[]>;
}
