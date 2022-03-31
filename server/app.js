import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

import path from "path";
app.use(express.static(path.resolve("../client/french-boutique/public")));

app.get('*', (req, res) => {
    res.sendFile(path.resolve("../client/french-boutique/public/index.html"))
  })



app.listen(PORT,()=>{
    console.log("Now running on port",PORT)
});