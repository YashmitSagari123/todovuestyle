import express from "express";
import 'dotenv/config';
import morgan from "morgan"

import todoRoutes from "./routes/todo.router.js";
import connectDB from "./utils/connectDB.js";

const app = express();
const PORT = process.env.PORT;

if(process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(express.json({ urlencoded: true }));

app.use("/api/todos", todoRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({msg: "200 OK"});
});

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`)
  await connectDB()
})
