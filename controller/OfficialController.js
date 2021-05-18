const {official} = require('../models/models'); 
const uuid = require('uuid');
const path = require('path');

class OfficalController { 
async createOffical(req, res) { 
const { title, text, bdate } = req.body;
const {img} = req.body; 
let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        const newOffical = await official.create({
           img:fileName, text, bdate
        });
        res.json(newOffical);
}
async getOffical(req, res) { 
const {id} = req.params; 
const oneOffical = await Offical.findOne({ 
wehere: {id} 
}); 
res.json(oneOffical.rows[0]); 
} 
async updateOffical(req, res) { 
const { title, img, text, bdate } = req.body; 
const updateOffical = await Offical.update({ 
        title, img, text, bdate
}); 
res.json(updateOffical.rows[0]); 
} 
async deleteOffical(req, res) { 
const {id} = req.params; 
const deleteOffical = await Offical.delete({ 
wehere: {id} 
}); 
res.json(deleteOffical.rows[0]); 
} 
}; 

module.exports = new OfficalController();