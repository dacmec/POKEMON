const { Router } = require("express");
const { getTypesHandler, createTypeHandler } = require("../handlers/typeHandlers");


const typeRouter = Router();

typeRouter.get('/', getTypesHandler);

typeRouter.post('/', createTypeHandler)






module.exports = typeRouter;