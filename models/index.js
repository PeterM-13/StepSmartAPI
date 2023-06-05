import { pool } from "../db/index.js";

// async function to get by name
async function getStickData(code) {
  const results = await pool.query(
      `SELECT * FROM StickData
      WHERE code = $1`,
      [code]
  );
  return results.rows[0];
}

// async function to get alert data
async function getAlertData(code) {
  const results = await pool.query(
    `SELECT alert FROM StickData
    WHERE code = $1`,
    [code]
  );
  return results.rows[0].alert;
}
// async function to update alert data
async function updateAlert(code, update) {
  const results = await pool.query(
    `UPDATE StickData
    SET alert = $2
    WHERE code = $1
    RETURNING *`,
    [code, update]
  );
  return results.rows[0].alert;
}
async function getLostData(code) {
  const results = await pool.query(
    `SELECT lost FROM StickData
    WHERE code = $1`,
    [code]
  );
  return results.rows[0].alert;
}
// async function to update lost value
async function updateLost(code, update) {
  const results = await pool.query(
    `UPDATE StickData
    SET lost = $2
    WHERE code = $1
    RETURNING *`,
    [code, update]
  );
  return results.rows[0].alert;
}
export { getStickData, getAlertData, updateAlert, getLostData, updateLost };
