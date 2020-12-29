const knex = require('../../Model/index.Model')

exports.query = (req, res) => {
    knex.select().table('products')
        .then((result) => {
            console.log(result)
            console.log(result.length)
            // console.log(result[0])
            // console.log(result[0].product_ID)

            // result.map((values, index) => {
            //     console.log(index , values.product_ID)
            // })

            if (result.length >= 1) {
                return res.json({
                    success: true,
                    message: 'query products successfully!! with ' + result.length + ' rows',
                    products: result
                })
            }  else {
                return res.json({
                    success: true,
                    message: 'No result data!your result is ' + result.length + ' row',
                    category: result
                })
            }

        })
        .catch(err => console.log(err))

}