import express from "express";
import { index } from "../controllers/controllers.js";

const router = express.Router();

console.log("Router posts caricato correttamente");

router.get("/", index);

export default router;