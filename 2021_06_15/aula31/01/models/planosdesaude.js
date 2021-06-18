'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlanosDeSaude extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Pessoa, {
        foreignKey: 'pessoas_id',
        id: 'id'
      })
    }
  };
  PlanosDeSaude.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    carteirinha: DataTypes.STRING,
    pessoas_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pessoas'
      }
    }  
  }, {
    sequelize,
    modelName: 'PlanosDeSaude',
  });
  return PlanosDeSaude;
};