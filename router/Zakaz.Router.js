const Router = require('express'); 
const ZakazController = require('../controller/ZakazController'); 
const router = new Router(); 

router.post('/post', ZakazController.createZakaz); 

module.exports = router;