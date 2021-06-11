'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Meta.init({
    idMetas: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    nome: DataTypes.STRING(150),
    descricao: DataTypes.STRING(300),
    concluido: DataTypes.NUMBER(1),
    Usuarios_idUsuarios: {
      type: DataTypes.NUMBER,
      foreignKey: true
    }
  }, {
    sequelize,
    modelName: 'Meta',
  });
  return Meta;
};