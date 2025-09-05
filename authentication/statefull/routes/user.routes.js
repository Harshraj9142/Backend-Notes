import express from "express";

import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async(req))