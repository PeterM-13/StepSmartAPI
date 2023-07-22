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
    VALUES ('12345678', '{"alert": "1", "fall": "60", "alarm": "60", "volume": "5"}'::jsonb, ARRAY['{"name":"Jack Smith", "phoneNumber":"012345678901"}','{"name":"Harry Smith", "phoneNumber":"012345678900"}'], false, '{"logging":"1", "times":[], "readings":[]}'::jsonb, 75, '{}'::jsonb);
    
    INSERT INTO StickData (code, alert, contacts, lost, heartRate, battery, extra)
    VALUES ('55555555', '{"alert": "0", "fall": "10", "alarm": "10", "volume": "1"}'::jsonb, ARRAY['{"name":"Shelly Smith", "phoneNumber":"012345678901"}'::jsonb], false, '{"logging":"1", "times":[], "readings":[]}'::jsonb, 75, '{}'::jsonb);

    INSERT INTO StickData (code, alert, contacts, lost, heartRate, battery, extra)
    VALUES ('22222222', '{"alert": "1", "fall": "30", "alarm": "30", "volume": "10"}'::jsonb, ARRAY['{"name":"Smith Smith", "phoneNumber":"012345678901"}'::jsonb], false, '{}'::jsonb, 75, '{}'::jsonb);
    `
  );
}

// reset the database
async function resetTable() {
  return [await dropTable(), await createTable(), await refillTable()];
}

export { createTable, dropTable, refillTable, resetTable };
