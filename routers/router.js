import express from "express";
import { index, show, create } from "../controllers/controllers.js";

const router = express.Router();

console.log("Router posts caricato correttamente");

router.get("/", index);
router.get("/:id", show);
router.post("/", create);

export default router;