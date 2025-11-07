import express from "express"

const app = express()

app.post("/hooks/catch/:userId/:zapId",(req,res)=>{

    const userId = req.body.userId;
    const zapId = req.body.zapId;

})
app.listen(3000, () => {
    console.log("Server started on port 3000");
  });