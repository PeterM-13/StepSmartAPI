import { pool } from "./index.js";

// function to create table
async function createTable() {
  return await pool.query(
    `CREATE TABLE StickData (
      code INTEGER CONSTRAINT code_length CHECK (code >= 10000000 AND code <= 99999999),
      alert JSONB,
      contacts TEXT[],
      lost BOOLEAN,
      heartRate JSONB,
      battery INTEGER CHECK (battery >= 0 AND battery <= 100),
      extra JSONB,
      PRIMARY KEY (code)
    );`
  );
}

// drop table if exists
async function dropTable() {
  return await pool.query("DROP TABLE IF EXISTS StickData;");
}

// refill table with our data
async function refillTable() {
  return await pool.query(
    `INSERT INTO StickData (code, alert, contacts, lost, heartRate, battery, extra)
    VALUES ('55555555', '{"alert": "0", "fall": "60", "alarm": "60", "volume": "5"}'::jsonb, ARRAY['jim', 'bob'], false, '{}'::jsonb, 75, '{}'::jsonb);
    
    INSERT INTO StickData (code, alert, contacts, lost, heartRate, battery, extra)
    VALUES ('22222222', '{"alert": "1", "fall": "30", "alarm": "90", "volume": "10"}'::jsonb, ARRAY['jim', 'bob'], false, '{}'::jsonb, 75, '{}'::jsonb);
    `
  );
}

// reset the database
async function resetTable() {
  return [await dropTable(), await createTable(), await refillTable()];
}

export { createTable, dropTable, refillTable, resetTable };
