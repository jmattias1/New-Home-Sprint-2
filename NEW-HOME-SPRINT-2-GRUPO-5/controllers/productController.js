module.exports = {
    detail : (req,res) => {
        return res.render('productDetail',{
            title : 'Detalle'
        })   
    },
    cart : (req,res) => {
        return res.render('productCart',{
            title : 'Carrito'
        })   
    }
}
