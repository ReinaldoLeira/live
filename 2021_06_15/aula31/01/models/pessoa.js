'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Dependente, {
        foreignKey: 'idPessoas',
        targetKey: 'id',
        as: 'dependentes'
      })
      this.hasOne(models.PlanosDeSaude, {
        foreignKey: 'pessoas_id',
        targetKey: 'id'
      })
    }
  };
  Pessoa.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
  });
  return Pessoa;
};