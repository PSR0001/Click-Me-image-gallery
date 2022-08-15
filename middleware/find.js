
const image = require('../DB/mongoose');
const dotEnv = require('dotenv');
dotEnv.config({ path: '../.env' })

const Authenticate = async (req, res, next) => {
    // console.log(req.json)
    try {
        const rootImage = await image.find()

        if (!rootImage) {
            throw new Error('No image found!')
        }

    } catch (err) {
        res.send({status:401, message: 'failed!' })
    }
    
    next();
}

module.exports = Authenticate;