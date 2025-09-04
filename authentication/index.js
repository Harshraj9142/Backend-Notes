import express from "express";
import dotenv from "dotenv";
import session from "express-session";

import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config({ 
    path: "./.env" 
});

const app = express();

app.use(express.json());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 60 * 1000* 10}
    })
)
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("api/user", userRoutes);

connectDB()
    .then(()=>{
        app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
    })
    .catch((error)=>{
    console.error("Error connecting in Database". error.message);
    });
