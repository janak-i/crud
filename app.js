const express=require("express");
const app=express();
const port=process.env.port || 5000;
const products_routes = require("./routes/janak_product");
const connectDB= require("./db/connect");
// const { getAllProducts, getAllProductsTesting } = require("./productController");
// app.get("/api/products", getAllProducts);
// app.get("/api/products/testing", getAllProductsTesting);



app.get("/", (req, res) =>{
    res.send("welocome to my first node js project")
});

app.use("api/products", products_routes);

const start= async() => {
    try{
        await connectDB();
        app.listen(port,()=>{
            console.log(port);
            console.log('${PORT} Yes i am connected');

        });
    }catch(error){
        console.log(error);

    }

}
start();

