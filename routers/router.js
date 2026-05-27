import express from "express";
import { index, show } from "../controllers/controllers.js";

const router = express.Router();

console.log("Router posts caricato correttamente");

router.get("/", index);
router.get("/:id", show);

export default router;