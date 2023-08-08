import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js"

const PORT=4000;
const app = express()//es para hacer un servidor
app.use(cors())
app.use(express.json());

app.use('/usuario', usuarioRoutes);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`)
    connectDB();
});

export default app;