import express from "express";
const router = express.Router();

import {
  getStickData,
  getAlertData,
  updateAlert,
} from "../models/index.js";

function error(data, res){

}

// Minimal endpoint
router.get("/", async (req, res) => {
    try {
        res.status(200).json({ status: "Good" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
});

// GET all stick data
router.get("/", async (req, res) => {
  if (req.query.code !== undefined) {
    const code = req.query.code;
    try {
      const stickData = await getStickData(code);
      if (stickData) {
        res.status(200).json(stickData);
      } else {
        res.status(404).json({ error: "Stick data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Missing code parameter" });
  }
});

// GET alert data
router.get("/alert", async (req, res) => {
  if (req.query.code !== undefined) {
    const code = req.query.code;
    try {
      const alertData = await getAlertData(code);
      if (alertData) {
        res.status(200).json(alertData);
      } else {
        res.status(404).json({ error: "Alert data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Missing code parameter" });
  }
});

router.patch("/alert", async (req, res) => {
  const code = req.query.code;
  const update = req.body;
  if (code !== undefined && update !== undefined) {
    try {
      const updatedData = await updateAlert(code, update);
      if (updatedData) {
        res.status(200).json(updatedData);
      } else {
        res.status(404).json({ error: "Alert data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Missing code or update parameter" });
  }
});

export default router;
