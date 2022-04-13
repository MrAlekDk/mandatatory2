import express from "express";
import mailer from "../mailer/emailer.js"

const router = express.Router();
router.use(express.json());

router.post("/sendEmail", async (req,res)=>{
    const { name, message } = req.body
    mailer.sendNewEmail(process.env.BUSINESS_EMAIL, "Message on LBM from: " + req.body.name, req.body.message);

    res.sendStatus(202)
});

export default router;