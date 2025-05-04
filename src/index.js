import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    let port = process.env.PORT || 8000;
    app.on("error", (error) => {
      console.log("Error : ", error);
      throw error;
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!!", err.message);
  });

/*
*first approach
import express from "express";
const app = express();
//iffy function
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("Error : ", error);

      app.listen(process.env.PORT, () => {
        console.log(
          `Application port running on PORT : 
              ${process.env.PORT}`
        );
      });
    });
  } catch (error) {
    console.log("Error : ", error.message);
    throw err;
  }
})();
*/
