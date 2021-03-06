'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuario.init({
    idUsuarios: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    nome: DataTypes.STRING(150),
    email: DataTypes.STRING(150),
    senha: DataTypes.STRING(150)
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};