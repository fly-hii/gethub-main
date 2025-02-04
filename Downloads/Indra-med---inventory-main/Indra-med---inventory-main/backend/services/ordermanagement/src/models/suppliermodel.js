const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../../config/sequelize');

// Define the Supplier model
const Supplier = sequelize.define('Supplier', {
    supplier_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: { // Supplier name field
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    supplier_address: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    supplier_address2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    supplier_contact: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
}, {
    timestamps: true,
    tableName: 'supplier', // Set the table name to 'supplier' (in lowercase)
});

// Synchronize the model with the database
sequelize.sync({ force: false })  // Set to true for development only to drop existing tables
    .then(() => {
        console.log("Supplier table created successfully.");
    })
    .catch(err => {
        console.error("Error creating Supplier table:", err);
    });

module.exports = Supplier;
