const express = require('express');
const router = express.Router();
const dataProducts = require("../data/products.json")


router.get('/', (req, res) => {
    res.json(dataProducts)
})


router.get('/:pid', (req,res)=>{
    const pid = req.params.pid
    const product = dataProducts.find(p =>p.id == pid)
    res.json({product})
});

module.exports = router;

