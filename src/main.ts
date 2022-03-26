import express from "express";
import 'dotenv/config';
const app = express();
const port = 3000;

app.get( "/", (req , res ) => {
  return res.status(200).json('Hello World');
} );

app.listen( port, () => {
    console.log( `🔥 Server Started at http://localhost:${ port }` );
} );