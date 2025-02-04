// const { DataTypes } = require('sequelize');
// const { sequelize } = require('../../../../config/sequelize');
// const PurchaseOrder = require('../../../ordermanagement/src/models/purchase_ordermodel')

// // Define the Procurement model
// const Procurement = sequelize.define('Procurement', {
//     procurement_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     purchase_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: PurchaseOrder,
//             key: 'purchase_id'
//         }
//     },
//     received_date: {
//         type: DataTypes.DATE,
//         allowNull: true
//     },
//     status: {
//         type: DataTypes.STRING(255),
//         allowNull: true
//     }
// }, { timestamps: true });

// sequelize.sync({ force: false })  // Synchronizing the model with the DB
// .then(() => {
//   console.log("Procurement table created successfully.");
// })
// .catch(err => {
//   console.error("Error creating table:", err);
// });


// PurchaseOrder.hasMany(Procurement, { foreignKey: 'purchase_id', sourceKey: 'purchase_id' });
// Procurement.belongsTo(PurchaseOrder, { foreignKey: 'purchase_id', targetKey: 'purchase_id' });

// module.exports = Procurement;
