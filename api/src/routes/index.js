const { Router } = require('express');
// Importar todos los routers;
const pokemonRouter = require('./pokemonRouter')
const typeRouter = require('./typeRouter')
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/pokemon', pokemonRouter)
router.use('/type', typeRouter)



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
