import OneApi from "@rockcoolsaint/liblab-sdk";
import * as dotenv from "dotenv";

dotenv.config();

const client = new OneApi({
  authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
})

client.getMovies().then(p => {
  console.log(p);
})

client.getMovieById("5cd95395de30eff6ebccde5c").then(p => {
  console.log(p);
})

client.getMovieQuotes("5cd95395de30eff6ebccde5c").then(p => {
  console.log(p);
})