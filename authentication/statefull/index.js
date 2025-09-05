import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
dotenv.config({
    path:"./env"
});

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB connected");
    })
    .catch((error) => {
    console.log(error);
    })

app.use("/auth", authRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is started at https://localhost${PORT}`);
})


