const {response, request} = require('express');

const usuariosGET = (req = request, res = response) => {
    const query =  req.query;
    res.json({
        msg: 'GET API -- Controlador',
        query
    });
}

const usuariosPOST = (req, res) => {
    const body = req.body;
    res.json({
        msg: 'POST API -- Controlador',
        body
    })
}
const usuariosPUT = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'PUT API -- Controlador',
        id: id
    })
}

const usuariosDELETE = (req, res) => {
    res.json({
        msg: 'DELETE API -- Controlador'
    })
}

const usuariosPATCH = (req, res) => {
    res.json({
        msg: 'PATCH API -- Controlador'
    })
}

module.exports = {
    usuariosGET,
    usuariosPUT,
    usuariosPOST,
    usuariosDELETE,
    usuariosPATCH,
}