const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../../config/sequelize'); // Adjust the path as necessary

// Define the Manufacturer model
const Manufacturer = sequelize.define('Manufacturer', {
    manufacturer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    manufacturer_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    contact: {
        type: DataTypes.STRING(255),
        allowNull: true, // Set to true to allow null values if needed
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    tableName: 'manufacturer', // Explicitly set the table name to 'manufacturer'
});

// Synchronize the model with the database
sequelize.sync({ force: false }) // Set to true for development only to drop existing tables
    .then(() => {
        console.log("Manufacturer table created successfully.");
    })
    .catch(err => {
        console.error("Error creating Manufacturer table:", err);
    });

module.exports = Manufacturer;
