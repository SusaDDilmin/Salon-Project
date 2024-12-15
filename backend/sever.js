import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/" , (req , res) => {
    return res.json("Backend is working");
})

app.listen(8000,() => {
    console.log("Server is running on port 8000");
})

//TODO: Create a connection to the database