const { sql } = require('../config/db.config');

const getData = async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM your_table'); // Replace 'your_table' with the actual table name
    res.status(200).json(result.recordset);
  } catch (err) {
    console.error('Error executing query: ', err);
    res.status(500).send('Server error');
  }
};

module.exports = { getData };