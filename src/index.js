import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

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
