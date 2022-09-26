const {Model, DataTypes } = require('sequelize');
const sequelize = require('../../../test2/test2/test3/config/connection');

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'category'  
    }
);

module.exports = Category;
