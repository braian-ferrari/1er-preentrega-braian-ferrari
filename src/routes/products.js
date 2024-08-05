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

router.post('/', (req,res)=>{
    nuevoProduct= req.body;
    dataProducts.push(nuevoProduct);
});

router.put('/:pid', (req,res)=>{
    actProduct= req.body;
    const pid = req.params.pid;
    const index = dataProducts.findIndex(p => p.id == pid);
    dataProducts[index] = actProduct;
});
router.delete('/:pid', (req,res)=>{
    eliminarProduct= req.body;
    const pid = req.params.pid;
    const index = dataProducts.findIndex(p => p.id == pid);
    dataProducts.splice(index, 1);
    
});

module.exports = router;

