import express from "express";
import db from "../database/createConnection.js"

const router = express.Router();

router.use(express.json());

router.get("/items", async (req,res)=> {
    const allItems = await db.items.find().toArray();
    res.send({data: allItems})
})

/*router.get("/items/:id", async (req,res)=> {
    const specificItem = await db.items.find({id: Number(req.params.id)}).toArray();
    res.send({data: specificItem})
})*/

router.get("/items/:category", async (req,res)=> {
    const specificItem = await db.items.find({category: req.params.category}).toArray();
    res.send({data: specificItem})
})

router.post("/items", async(req,res)=>{
    const { id, name, price, stock, category } = req.body
    db.items.insertOne({id: Number(id), name: name, price: Number(price), stock: Number(stock), category: category});
    res.send(200)
})

router.patch("/items/:id", async(req,res)=>{

})

router.delete("/items/:id", async(req,res)=>{
    const deletedItem = await db.items.deleteOne({id: Number(req.params.id)})
})

export default router;