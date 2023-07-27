const express = require('express');
const router = express.Router();
const Video = require('../Model/video');
const Product = require('../Model/products'); 

// get all video thumbnail
router.get('/videos', async (req, res) => {
    try {
        const videos = await Video.find({}, { id: 1, image_url: 1, brand: 1, description: 1, video_url: 1});
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

})

// bonus: search
router.get('/search', async (req, res) => {
    const {brand} = req.query;
    
    try {
        const brands = await Video.find({ brand: { $regex: brand, $options: 'i' } });
        
        if(brands.length === 0){
            throw new Error('Brand yang dicari tidak ditemukan');
        }
        
        res.status(200).json(brands);    
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// post video
router.post('/video', async (req, res) => {
    const {image_url, video_url, brand, description, products} = req.body;
    try {
        const checkProductId = await Product.find({_id: {$in: products}}, '_id');
        if(checkProductId.length !== products.length){
            throw new Error('produk ID tidak valid')
        }
        if(image_url === " "){
            throw new Error('field image url tidak boleh kosong');
        }
        if(video_url === " "){
            throw new Error('field video url tidak boleh kosong');
        }
        if(brand === " "){
            throw new Error('field brand tidak boleh kosong');
        }
        if(description === " "){
            throw new Error('field description tidak boleh kosong');
        }
        const newVideo = new Video({image_url, video_url, brand, description, products});
        const videoSave = await newVideo.save();
        res.status(201).json(videoSave);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

module.exports = router;