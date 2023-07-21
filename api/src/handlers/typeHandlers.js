const { getAllTypes, createType } = require("../controllers/typeControllers")

const getTypesHandler = async (req, res) => {
    try {



        const results = await getAllTypes();




        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }





}

const createTypeHandler = async (req, res) => {
    try {

        const { name } = req.body;
        const newType = await createType(name)
        res.status(201).json("CREADO EXITOSAMENTE");
       
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}




module.exports = {
    getTypesHandler,
    createTypeHandler
}


