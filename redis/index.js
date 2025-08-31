const express = require("express");
const { redis } = require('./redis'); 

const app = express();

app.get("/", async (req, res) => {
  try 
  { 
    const views = await redis.incr('pageViews');
    res.send(`This page was visted ${views} times`);
  } 
  catch (error)
  {
    res.status(500).send('Error accesssigng redis');
  }
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})