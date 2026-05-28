const sequelize = require('../db/connection');
const { DataTypes } = require('sequelize');

const MaestrosList = sequelize.define('MaestrosList', {

    id_maestro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    nombre_maestro: {
        type: DataTypes.STRING,
    },

    materia: {
        type: DataTypes.STRING,
    },

    seccion: {
        type: DataTypes.STRING,
    },

    correo: {
        type: DataTypes.STRING,
    },

    estado: {
        type: DataTypes.INTEGER,
    },

}, {
    tableName: 'listamaestro',
    timestamps: false,
});

module.exports = MaestrosList;