const router = require('express').Router()
const Product = require('../models/product')

router.get('/', (req, res) => {
    Product.find({}, (err, products) => {
        if(err) throw err
        res.send(products)
    })
})

router.post('/', async (req, res) => {
    const {name, image, count, size, weight} = req.body
    
    const product = new Product({name, image, count, size, weight})

    await product.save()
    res.status(201).json({msg: 'Product has created'})
})

router.delete('/:id', async (req, res) => {
    let id = req.params.id;

    Product.remove({_id: id}, (err) => {
        if(err) throw err;
        res.status(200).json({msg: "Product was removed"});
    })
})


module.exports = router