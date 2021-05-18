const {Zakaz} = require('../models/models');

class ZakazController {
    async createZakaz (req,res){
        const {type, description, rtc} = req.body;
        const createZakaz = await Zakaz.create({
            type, description, rtc
        });
        res.json(createZakaz);
    }

    async getZakaz (req, res){
        const {id} = req.body;
        const oneZakaz = await Zakaz.findOne({
            where:{id}
        });
        res.json(oneZakaz.rows[0]);
    }

    async updateZakaz (req,res){
        const {type, description, rtc} = req.body;
        const updateZakaz = await Zakaz.update({
            type, description, rtc
        });
        res.json(updateZakaz[0]);
    }

    async deleteZakaz (req, res){
        const {id} = req.params;
        const deleteZakaz = await Zakaz.delete({
            where:{id}
        });
        res.json(deleteZakaz.rows[0]);
    }
}

module.exports = new ZakazController();