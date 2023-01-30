import express from "express";
import emiInfo from "../models/emiModel.js";

const emiRouter = express.Router();

emiRouter.post("/calemi", async (req, res) => {
  const user = await emiInfo.findOne({ email: req.body.email });
  if(user){
    await emiInfo.updateOne({ email: req.body.email },{
      $push:{
        total : [{
          amount: req.body.total.amount,
          months: req.body.total.months,
          intrate: req.body.total.monInterest,
          emitotal: req.body.total.total,
      }]
      }})
  }
  else{
    const newEmi = new emiInfo({
      userId : req.body.userId,
      email : req.body.email,
      total : [{
          amount: req.body.total.amount,
          months: req.body.total.months,
          intrate: req.body.total.monInterest,
          emitotal: req.body.total.total,
      }]
    });
    const data = await newEmi.save();
  }
  res.status(200).send("Send Successfully");
});

emiRouter.get('/allemi/:email', async(req,res)=>{
  const user = await emiInfo.findOne({ email: req.params.email });
  if(user)
    res.send(user);
  else
    res.status(404).send({ message: 'Data is not available' });
})

export default emiRouter;

