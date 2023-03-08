# Design architecture

The application was designed under two directories
- The main directory liblab-sdk
- The test directory sdk-test

The app was designed using Node.js and typescript

The client is first configured:
```
const client = new OneApi({
  authorization: `Bearer 12esdaw3dssf`,
})

The three endpoints that were created are
- client.getMovies()
- client.getMovieById("id")
- client.getMovieQuotes("id")
