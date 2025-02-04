const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../../config/sequelize'); // Adjust the path as necessary

// Define the PracticeItemManufacturer model
const PracticeItemManufacturer = sequelize.define('PracticeItemManufacturer', {
    practice_item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    manufacturer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    manufacturercode: {
        type: DataTypes.INTEGER,
        allowNull: true, // Set to true to allow null values if needed
    },
    GTIN: {
        type: DataTypes.STRING, // Adjust size if needed
        allowNull: true, // Set to true to allow null values if needed
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    tableName: 'practice_item_manufacturer', // Explicitly set the table name
    indexes: [
        {
            unique: true,
            fields: ['practice_item_id', 'manufacturer_id'] // Composite primary key
        }
    ]
});

// Synchronize the model with the database
sequelize.sync({ force: false }) // Set to true for development only to drop existing tables
    .then(() => {
        console.log("PracticeItemManufacturer table created successfully.");
    })
    .catch(err => {
        console.error("Error creating PracticeItemManufacturer table:", err);
    });

module.exports = PracticeItemManufacturer;
