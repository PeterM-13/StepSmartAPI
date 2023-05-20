import { dropTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await dropTable();
  console.log("Dropped 'StickData' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
