const express = require('express');
const router = express.Router();
const User = require('../Model/users');

// post comment
router.post('/comment/:videoId', async (req, res) => {
    const {username, comment} = req.body;
    const videoId = req.params.videoId;

    try {
         if(username === " "){
          // res.status(400).json({message: 'username tidak boleh kosong'});
          throw new Error('username tidak boleh kosong')
         }
         if(comment === " "){
          // res.status(400).json({message: 'comment tidak boleh kosong'})
          throw new Error('comment tidak boleh kosong')
         }
        const newUser = new User({username, comment, videoId});
        const addNewComment = await newUser.save();

        res.status(201).json({success: true, message: 'Commment berhasil ditambahkan'});
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
})

//get comment berdasarkan videoId:
router.get('/comment/:videoId', async (req, res) => {
    try {
        const videoId = req.params.videoId;
    
        // Find all users with the specified videoId
        const users = await User.find({ videoId }).exec();
    
        if (users.length === 0) {
          return res.status(404).json({ message: 'Tidak ada comment' });
        }

        res.status(200).json(users);
      } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve user data' });
      }
})

module.exports = router;