const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../../config/sequelize');
const { Practice } = require('../../../practice/src/models/practice');
const Product = require('../../../product/src/models/productmodel');

// Define the PracticeItem model
const PracticeItem = sequelize.define('PracticeItem', {
    practice_item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'product_id'
        }
    },
    practice_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Practice,
            key: 'practice_id'
        }
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    unit_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    UOM: {
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
    expiry_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    is_asset: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    is_drug: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    image: {
        type: DataTypes.BLOB,
        allowNull: true
    }
}, { timestamps: true });


Practice.hasMany(PracticeItem, { foreignKey: 'practice_id', sourceKey: 'practice_id' });
PracticeItem.belongsTo(Practice, { foreignKey: 'practice_id', targetKey: 'practice_id' });
Product.hasMany(PracticeItem, { foreignKey: 'product_id', sourceKey: 'product_id' });
PracticeItem.belongsTo(Product, { foreignKey: 'product_id', targetKey: 'product_id' });


// Synchronize the model with the database
sequelize.sync({ force: false }) // Set to true for development only
    .then(() => {
        console.log('PracticeItem table created successfully.');
    })
    .catch(err => {
        console.error('Error creating PurchaseOrder table:', err);
    });

module.exports = PracticeItem;
