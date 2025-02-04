const sql = require('mssql');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from the .env file
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// Database configuration
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,  // Should be an IP address
  database: process.env.DB_NAME,
  options: {
    encrypt: true,  // Use this if you're on Azure
    trustServerCertificate: true,  // Use this for local development
    connectTimeout: 30000
  },
  port: parseInt(process.env.DB_PORT)
};

// Log the database configuration for debugging
console.log('Database Configuration:', dbConfig);

async function connectDB() {
  try {
    await sql.connect(dbConfig);
    console.log('Connected to MSSQL Database');
  } catch (err) {
    console.error('Database connection failed: ', err);
    console.log('DB_USER:', process.env.DB_USER);
    console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
    console.log('DB_SERVER:', process.env.DB_SERVER);
    console.log('DB_NAME:', process.env.DB_NAME);
    console.log('DB_PORT:', process.env.DB_PORT);
  }
}

module.exports = { connectDB, sql };
