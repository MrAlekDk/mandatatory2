import express from "express";
import db from "../database/createConnection.js"
import bcrypt from "bcrypt"
import mailer from "../mailer/emailer.js"

const router = express.Router();

router.use(express.json())

router.post("/register",async (req,res)=>{
    const { email, password } = req.body
    const login = await db.users.findOne({email: email});
    if(login === null){
        try{
            const hashedPassword = await bcrypt.hash(password, 10);
            db.users.insertOne({email: email, password: hashedPassword});
            
            mailer.sendNewEmail(email,"Succesfully created account","Welcome to La Boutique manifique!");
            res.sendStatus(200);
        }
        catch{
            res.sendStatus(400);
        }
        return;
    }
    res.sendStatus(403)
    
});

router.post("/login", async (req,res)=>{
    const login = await db.users.findOne({email: req.body.username});
    if(login === null){
        res.sendStatus(404)
        return;
    }
    try{
        if(await bcrypt.compare(req.body.password, login.password)){
            res.sendStatus(200);
        } else {
            res.status(400).send("Wrong password");
        }
        
    }
    catch{
        res.sendStatus(500);
    }
    
});

export default router;