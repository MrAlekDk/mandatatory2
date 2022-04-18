import express from "express";
import db from "../database/createConnection.js";
import bcrypt from "bcrypt";
import mailer from "../mailer/emailer.js";
import session from "express-session";


const router = express.Router();
router.use(session(
    {
        secret: 'keyboard cat shhh',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }
));

router.use(express.json());

router.post("/register",async (req,res)=>{
    const { email, password } = req.body;
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
    const user = await db.users.findOne({email: req.body.username});
    if(user === null){
        res.status(400).send("User doesn't exist");
    }
    else{
        try{
            if(await bcrypt.compare(req.body.password, user.password)){
                req.session.user = user;
                res.sendStatus(200);
            } else {
                res.sendStatus(400).send("Wrong password");
            }
        }
        catch{
            //this catch will cause problems when you only enter an email and press login
            //res.sendStatus(500);
        }
    }
});

router.post("/logOut", (req,res)=>{
        req.session.user = null;
        res.sendStatus(200)
    });

router.post("/authorize", (req,res)=>{
    const user = req.session.user
    if(user){
      res.status(200).send({user: user.email})
    }
    else{
        res.sendStatus(403)
    }
  })

export default router;
