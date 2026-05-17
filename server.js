import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
console.log("OpenRouter key:", process.env.OPENROUTER_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {

  try {

    const message = req.body.message;

    const response = await axios.post(

      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: "openrouter/free",

        messages: [
          {
            role: "user",
            content: message
          }
        ]
      },

      {
        headers: {
          Authorization:
            `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type": "application/json"
        }
      }
    );

    res.json({
      reply:
      response.data.choices[0].message.content
    });

  } catch(error){

    console.log(error.response?.data || error);

    res.status(500).json({
      reply: "Server error"
    });
  }
});

app.post("/generate-plan", async (req, res) => {

  try {

    const topic = req.body.topic;

    const response = await axios.post(

      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: "openrouter/free",

        messages: [
          {
            role: "user",
            content:
            `Create a study plan for ${topic}`
          }
        ]
      },

      {
        headers: {
          Authorization:
            `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type": "application/json"
        }
      }
    );

    res.json({
      result:
      response.data.choices[0].message.content
    });

  } catch(error){

    console.log(error.response?.data || error);

    res.status(500).json({
      result: "Server error"
    });
  }
});
app.get("/", (req, res) => {
  res.send("Backend is working");
});
app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.listen(3000, () => {

  console.log(
    "Server started on port 3000"
  );
});