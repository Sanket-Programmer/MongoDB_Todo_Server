const mongoose = require("mongoose");
const express = require("express");

const PORT = 3000;
const app = express();
app.use(express.json());

const MONGO_URI = "mongodb://127.0.0.1:27017/TodoDB";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

const todo = new mongoose.model("todo", todoSchema);

mongoose.connect(MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
    const sampleTodo = new todo({ title: "watch a movie" });
    sampleTodo.save()
      .then(() => console.log("Todo saved to DB"))
      .catch(err => console.error("Error saving Todo:", err));
  })
  .catch((err) => console.error("MongoDB connection error:", err));

  app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

