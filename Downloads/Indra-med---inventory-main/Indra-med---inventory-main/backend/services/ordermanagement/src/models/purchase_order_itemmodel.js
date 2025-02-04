const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../../config/sequelize'); // Adjust the path as necessary
const PurchaseOrder = require('../../../ordermanagement/src/models/purchase_ordermodel'); // Ensure the path is correct
const PracticeItem = require('../../../practice/src/models/practice_itemmodel'); // Ensure the path is correct

// Define the PurchaseOrderItem model
const PurchaseOrderItem = sequelize.define('PurchaseOrderItem', {
    PO_Itemid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    purchase_id: {
        type: DataTypes.INTEGER,
        references: {
            model: PurchaseOrder,
            key: 'purchase_id',
        },
        
    },
    practice_item_id: {
        type: DataTypes.INTEGER,
        references: {
            model: PracticeItem,
            key: 'practice_item_id',
        },
        
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    UOM: {
        type: DataTypes.STRING(255),
        allowNull: true, // Adjust based on your requirements
    },
    vendor_confirmation_number: {
        type: DataTypes.STRING(255),
        allowNull: true, // Adjust based on your requirements
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true, // Adjust based on your requirements
    },
}, { timestamps: true });



// Associations
PurchaseOrder.hasMany(PurchaseOrderItem, { foreignKey: 'purchase_id', sourceKey: 'purchase_id' });
PurchaseOrderItem.belongsTo(PurchaseOrder, { foreignKey: 'purchase_id', targetKey: 'purchase_id' });
PracticeItem.hasMany(PurchaseOrderItem, { foreignKey: 'practice_item_id', sourceKey: 'practice_item_id' });
PurchaseOrderItem.belongsTo(PracticeItem, { foreignKey: 'practice_item_id', targetKey: 'practice_item_id' });


// Synchronize the model with the database
sequelize.sync({ force: false })  // Set to true for development only, to drop existing tables
    .then(() => {
        console.log("PurchaseOrderItem table created successfully.");
    })
    .catch(err => {
        console.error("Error creating PurchaseOrderItem table:", err);
    });


module.exports = PurchaseOrderItem;
