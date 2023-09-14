import { pool } from "../db/index.js";

// async function to get by name
async function getStickData(code) {
  const results = await pool.query(
      `SELECT devices,alert,lost,heartRate,battery,emergency 
      FROM StickData
      WHERE code = $1`,
      [code]
  );
  return results.rows[0];
}

// GET data need for arduino
async function getArduinoData(code){
  const results = await pool.query(
    `SELECT alert,lost,heartRate,emergency
    FROM StickData
    WHERE code = $1`,
    [code]
);
  return results.rows[0];
}

// GET devices data
async function getDevices(code){
  let results = await pool.query(
    `SELECT devices
    FROM StickData
    WHERE code = $1`,
    [code]
  );
return results.rows[0].devices;
}
// async function to update devices data
async function updateDevices(code, newDevice) {
  let devicesArray = await getDevices(code);
  if (!devicesArray.includes(newDevice)) {
    devicesArray.push(newDevice);
    const updatedList = await pool.query(
      `UPDATE StickData
      SET devices = $2
      WHERE code = $1
      RETURNING *`,
      [code, devicesArray]
    );
    return updatedList.rows[0];
  }else{
    return {"Error":"Device alreday exists"}
  }
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

// Function to get 'lost' data
async function getLostData(code) {
  const results = await pool.query(
    `SELECT lost FROM StickData
    WHERE code = $1`,
    [code]
  );
  return results.rows[0];
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
  return results.rows[0];
}

// Function to get contacts data
async function getContactsData(code) {
  const results = await pool.query(
    `SELECT contacts
    FROM StickData
    WHERE code = $1`,
    [code]
  );
  return results.rows[0];
}
// async function to update emergency contacts
async function updateContacts(code, update) {
  const results = await pool.query(
    `UPDATE StickData
    SET contacts = $2
    WHERE code = $1
    RETURNING *`,
    [code, update]
  );
  return results.rows[0];
}

// Function to get all heart rate data
async function getHeartData(code) {
  const results = await pool.query(
    `SELECT heartRate
    FROM StickData
    WHERE code = $1`,
    [code]
  );
  return results.rows[0];
}
// async function to update all heart rate data
async function updateHeartData(code, update) {
  const results = await pool.query(
    `UPDATE StickData
    SET heartRate = $2
    WHERE code = $1
    RETURNING *`,
    [code, update]
  );
  return results.rows[0];
}

// Function to get battery data
async function getBatteryData(code) {
  const results = await pool.query(
    `SELECT battery
    FROM StickData
    WHERE code = $1`,
    [code]
  );
  return results.rows[0];
}
// async function to update battery data
async function updateBatteryData(code, update) {
  const results = await pool.query(
    `UPDATE StickData
    SET battery = $2
    WHERE code = $1
    RETURNING *`,
    [code, update]
  );
  return results.rows[0];
}

// Function to get 'emergency' data
async function getEmergency(code) {
  const results = await pool.query(
    `SELECT emergency FROM StickData
    WHERE code = $1`,
    [code]
  );
  return results.rows[0];
}
// async function to update lost value
async function updateEmergency(code, update) {
  const results = await pool.query(
    `UPDATE StickData
    SET emergency = $2
    WHERE code = $1
    RETURNING *`,
    [code, update]
  );
  return results.rows[0];
}

export { getStickData,
        getArduinoData,
        getDevices,
        updateDevices,
        getAlertData, 
        updateAlert, 
        getContactsData, 
        updateContacts, 
        getLostData, 
        updateLost, 
        getHeartData, 
        updateHeartData, 
        getBatteryData, 
        updateBatteryData,
        getEmergency,
        updateEmergency
     };