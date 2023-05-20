import { refillTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await refillTable();
  console.log("Seeded 'StickData' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
