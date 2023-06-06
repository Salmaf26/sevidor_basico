const { Router, response, request } = require('express');

const router = Router ();

//http://localhost:8000/api/usuarios

//obtener usuarios /get
router.get('/', (req = request, res = response)  => {
    res.status(200).json({
        msg: 'get usuarios'
    })
});

//crear usuarios /post
router.post('/', (req = request, res = response)  => {
    res.status(200).json({
        msg: 'post usuarios'
    })
});

//obtener usuarios por id /get
router.get('/:id', (req = request, res = response)  => {
    res.status(200).json({
        msg: 'get usuarios por id'
    })
});

//actualizar usuarios /put,update
router.put('/:id', (req = request, res = response)  => {
    res.status(200).json({
        msg: 'put usuarios actualizados'
    })
});

//eliminar usuarios /delate
router.delete('/:id', (req = request, res = response)  => {
    res.status(200).json({
        msg: 'delete para eliminar usuarios'
    })
});


module.exports = router;