const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const { connectDB } = require('./config/db.config');
const { connectionDB } = require('./config/sequelize');
const apiRoutes = require('./routes/api');
const { sequelize } = require('./config/sequelize');

const { ProductCategory } = require('./services/category/src/models/categorymodel');
const {Hospital,Practice} = require('./services/practice/src/models/practice');
const Product = require('./services/product/src/models/productmodel');
const PurchaseOrder = require('./services/ordermanagement/src/models/purchase_ordermodel')
// const PurchaseOrderItem = require('./services/ordermanagement/src/models/purchase_order_itemmodel')
// const Procurement = require('./services/ordermanagement/src/models/procurementmodel')
// const ProcurementItem = require('./services/ordermanagement/src/models/procurement_itemmodel')
const PracticeItem = require('./services/practice/src/models/practice_itemmodel')
//const Supplier = require('./services/ordermanagement/src/models/suppliermodel')
const Manufacturer = require('./services/manufacturer_management/src/models/manufacturermodel')
const practice_item_manufacturer = require('./services/manufacturer_management/src/models/practice_item_manufacturermodel')

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to the MSSQL database
connectDB();
connectionDB();

// Define API routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
