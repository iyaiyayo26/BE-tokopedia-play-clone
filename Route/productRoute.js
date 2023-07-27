const express = require('express');
const router = express.Router();
const Products = require('../Model/products');
const Video = require('../Model/video');

//get list of product (id, link, title, price)
router.get('/video/product/:videoId', async (req, res) => {
    const videoId = req.params.videoId;
    try {
        const videoProduct = await Video.findById(videoId).populate('products');
        const product = videoProduct.products.map((p) => {
            return{
                _id: p._id,
                link: p.link,
                title: p.title,
                price: p.price
            }
        })
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//post produk:
router.post('/product', async (req, res) => {
    const {link, title, price} = req.body;
    try {
        if(link === " "){
            throw new Error('Field link tidak boleh kosong');
        }
        if(title === " "){
            throw new Error('Field title tidak boleh kosong');
        }
        if(price === 0){
            throw new Error("Field price tidak boleh 0");
        }
        const newProduct = new Products({link, title, price});
        const addNewProduct = await newProduct.save();
        res.status(201).json(addNewProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})


module.exports = router;