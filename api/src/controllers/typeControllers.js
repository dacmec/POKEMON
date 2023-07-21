const { Type } = require("../db")
const axios = require("axios");





const getAllTypes = async () => {
    const getDbInfo = await Type.findAll();

    const getApiInfo = (
        await axios.get(`https://pokeapi.co/api/v2/type`)).data;


    return getDbInfo, getApiInfo
}

const createType = async (name) => {
    await Type.create({ name });








};

module.exports = { getAllTypes, createType }
