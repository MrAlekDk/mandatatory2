import express from "express";
import db from "../database/createConnection.js";
import bcrypt from "bcrypt";
import mailer from "../mailer/emailer.js";
import session from "express-session";

import jwt from "jsonwebtoken";


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
    let user = await db.users.findOne({email: req.body.username});
    if(user === null){
        res.status(400).send("User doesn't exist");
    }
    else{
        try{
            if(await bcrypt.compare(req.body.password, user.password)){
                const accesToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
                user.token = accesToken;
                console.log(user)
                res.json({user, user})
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

function authenticateToken(req, res, next){
    console.log("Let's see what u got")
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    console.log(authHeader)
    if(token === null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if (err) return res.sendStatus(403);
        req.user = user;
        next()
    });
}

router.post("/logOut", (req,res)=>{
        res.sendStatus(200)
    });

export const authRouter = router;
export const authToken = authenticateToken;
