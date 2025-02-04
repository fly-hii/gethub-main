const { DataTypes } = require('sequelize');
const {sequelize}=require('../../../../config/sequelize');

const Product = sequelize.define('Product', {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'product',
    timestamps: true
  });
  
  sequelize.sync({ force: false })  // Synchronizing the model with the DB
  .then(() => {
    console.log("Product table created successfully.");
  })
  .catch(err => {
    console.error("Error creating table:", err);
  });

  module.exports = Product;