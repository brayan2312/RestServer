const { Router} = require('express');
const { usuariosGET, usuariosPOST, usuariosPUT, usuariosDELETE, usuariosPATCH } = require('../controllers/usuarios');

const router = Router();


router.get('/', usuariosGET);

router.post('/',usuariosPOST);

router.put('/:id', usuariosPUT);

router.delete('/', usuariosDELETE);

router.patch('/', usuariosPATCH);


module.exports = router;