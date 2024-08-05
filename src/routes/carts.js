const express = require('express');
const router = express.Router();
const carts = require("../data/carts.json")

router.post('/', (req, res) => {
    newcart = req.body;
    carts.push(newcart);
    res.json({newcart})
});

router.get('/:cid', (req, res) => {
    const cid = req.body.cid; 
    const cart = carts.find(cart => cart.id === cid); 
    if (cart) {
        res.json(cart);
    } else {
        res.status(404).send('Carrito no encontrado');
    }
});

router.post('/:cid/product/:pid', (req, res) => {
    const cid = req.params.cid; 
    const pid = req.params.pid; 

    
    const cart = carts.find(cart => cart.id === cid);
    if (!cart) {
        return res.status(404).send('Carrito no encontrado');
    }

    
    const product = cart.products.find(p => p.productId === pid);
    if (product) {
        
        product.quantity += 1;
    } else {
        
        cart.products.push({ productId: pid, quantity: 1 });
    }
})

router.delete('/:pid', (req, res) => {


});


module.exports = router