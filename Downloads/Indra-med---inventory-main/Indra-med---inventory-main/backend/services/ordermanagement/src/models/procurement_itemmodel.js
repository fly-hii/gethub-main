// const { DataTypes } = require('sequelize');
// const { sequelize } = require('../../../../config/sequelize');
// const Procurement = require('../../../ordermanagement/src/models/procurementmodel');
// const PracticeItem = require('../../../practice/src/models/practice_itemmodel');

// // Define the ProcurementItem model
// const ProcurementItem = sequelize.define('ProcurementItem', {
//     procurement_itemid: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     procurement_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Procurement,
//             key: 'procurement_id'
//         }
//     },
//     practice_item_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: PracticeItem,
//             key: 'practice_item_id'
//         }
//     },
//     GTIN: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     total_quantity: {
//         type: DataTypes.INTEGER,
//         allowNull: true
//     },
//     price: {
//         type: DataTypes.DECIMAL(10, 2),
//         allowNull: true
//     }
// }, { timestamps: true });

// sequelize.sync({ force: false })  // Synchronizing the model with the DB
// .then(() => {
//   console.log("ProcurementItem table created successfully.");
// })
// .catch(err => {
//   console.error("Error creating table:", err);
// });

// Procurement.hasMany(ProcurementItem, { foreignKey: 'procurement_id', sourceKey: 'procurement_id' });
// ProcurementItem.belongsTo(Procurement, { foreignKey: 'procurement_id', targetKey: 'procurement_id' });
// PracticeItem.hasMany(ProcurementItem, { foreignKey: 'practice_item_id', sourceKey: 'practice_item_id' });
// ProcurementItem.belongsTo(PracticeItem, { foreignKey: 'practice_item_id', targetKey: 'practice_item_id' });

// module.exports = ProcurementItem;
