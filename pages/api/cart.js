import { Product } from "@/models/Product";

const { mongooseConnect } = require("@/lib/mongoose")

export default async function handle(req,res){
    await mongooseConnect();
    const ids = req.body.ids;;
    res.json(await Product.find({_id:ids}))
} 