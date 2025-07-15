import express from "express";
import multer from "multer";
import { analyseSkin } from "../controllers/skinAnalysis.Controller";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("skinImage"), analyseSkin);

export default router;
