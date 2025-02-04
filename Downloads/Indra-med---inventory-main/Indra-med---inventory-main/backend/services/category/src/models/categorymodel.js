const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../../config/sequelize');

const ProductCategory = sequelize.define('ProductCategory', {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, { timestamps: true });

  sequelize.sync({ force: false })  // Synchronizing the model with the DB
  .then(() => {
    console.log("Product Category table created successfully.");
  })
  .catch(err => {
    console.error("Error creating table:", err);
  });
  
  module.exports = {ProductCategory};