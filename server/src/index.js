import express from "express";
import allRoutes from "../src/routes/index.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", allRoutes)

app.listen(PORT, () => {
    console.log(`✅ Server listening on port ${PORT}`)
})



