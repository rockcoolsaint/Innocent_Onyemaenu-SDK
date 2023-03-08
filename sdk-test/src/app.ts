import OneApi from "liblab-sdk";
import * as dotenv from "dotenv";

dotenv.config();

const client = new OneApi({
  authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
})

client.getMovies().then(p => {
  console.log(p);
})