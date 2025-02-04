const { Sequelize } = require('sequelize');



// Create a new instance of Sequelize for MSSQL
const sequelize = new Sequelize({
  dialect: 'mssql',
  host: '20.75.236.64', // Server name or IP address
  port: 8282, // Default MSSQL port
  database: 'InventoryManagementSystem', // Your database name
  username: 'incrivelsoft', // Your SQL Server username
  password: 'C60YjI4y8n55XgibrdoT', // Your SQL Server password
  dialectOptions: {
    options: {
      encrypt: true, // Use encryption if required
      trustServerCertificate: true // Enable for self-signed certificates
    },
  },
});

// Function to authenticate and test the connection
const connectionDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Export the sequelize instance and connect function
module.exports={ connectionDB , sequelize};
