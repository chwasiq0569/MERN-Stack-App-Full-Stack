import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postsRoutes from "./routs/posts.js";
const app = express();

app.use("/posts", postsRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://chwasiq0569:chwasiq0569@cluster0.wj70i.mongodb.net/<dbname>?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log("Server Running"));

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`))
  )
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false); //to hide warnings from console
