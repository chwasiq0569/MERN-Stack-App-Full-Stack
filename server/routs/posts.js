import express from "express";
import { createPosts, getPosts } from "../controllers/posts.js";

const route = express.Router();

route.get("/", getPosts);
route.post("/", createPosts);

export default route;
