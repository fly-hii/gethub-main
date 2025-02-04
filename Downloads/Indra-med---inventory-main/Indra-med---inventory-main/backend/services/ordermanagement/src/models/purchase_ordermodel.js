const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../../config/sequelize');
const { Practice } = require('../../../practice/src/models/practice');
const Supplier = require('../../../ordermanagement/src/models/suppliermodel');

// Define the PurchaseOrder model
const PurchaseOrder = sequelize.define('PurchaseOrder', {
    purchase_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    practice_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Practice,
            key: 'practice_id'
        }
    },
    supplier_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Supplier,
            key: 'supplier_id'
        }
    },
    PO_number: {
        type: DataTypes.STRING(255),
        allowNull: false, // Cannot be null
    },
    order_date: {
        type: DataTypes.DATE,
        allowNull: false, // Cannot be null
    },
    po_status: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            isIn: [['Pending', 'Completed', 'Cancelled']], // Enforcing ENUM-like behavior
        },
    },
    vendor_confirmation_number: {
        type: DataTypes.STRING(255),
        allowNull: true, // Can be null
    },
    order_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            isIn: [['Standard', 'Express']], // Enforcing ENUM-like behavior
        },
    },
    expected_delivery_date: {
        type: DataTypes.DATE,
        allowNull: true, // Can be null
    },
    total_products: {
        type: DataTypes.INTEGER,
        allowNull: false, // Cannot be null
    },
    back_order_products: {
        type: DataTypes.INTEGER,
        allowNull: false, // Cannot be null
    },
    paid: {
        type: DataTypes.BOOLEAN, // Using BOOLEAN for true/false values
        allowNull: false, // Cannot be null
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true, // Can be null
    },
    
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});


Practice.hasMany(PurchaseOrder, { foreignKey: 'practice_id', sourceKey: 'practice_id' });
PurchaseOrder.belongsTo(Practice, { foreignKey: 'practice_id', targetKey: 'practice_id' });
Supplier.hasMany(PurchaseOrder, { foreignKey: 'supplier_id', sourceKey: 'supplier_id' });
PurchaseOrder.belongsTo(Supplier, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });


// Synchronize the model with the database
sequelize.sync({ force: false }) // Set to true for development only
    .then(() => {
        console.log('PurchaseOrder table created successfully.');
    })
    .catch(err => {
        console.error('Error creating PurchaseOrder table:', err);
    });


    
module.exports = PurchaseOrder;
