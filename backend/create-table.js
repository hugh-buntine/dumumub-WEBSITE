const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function createEmailTable() {
  try {
    const client = await pool.connect();
    
    // Create the emails table
    await client.query(`
      CREATE TABLE IF NOT EXISTS emails (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        plugin VARCHAR(255),
        "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
    console.log('✅ Email table created successfully!');
    
    client.release();
  } catch (err) {
    console.error('❌ Error creating table:', err.message);
  } finally {
    await pool.end();
  }
}

createEmailTable();
