import express from "express";
import { Expo } from 'expo-server-sdk';

const router = express.Router();

import {
  getStickData,
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
  updateEmergency
} from "../models/index.js";

function error(data, res){

}


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
    res.status(200).json({ status: "Good connection", error: "Add code parameter" });
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

// GET lost mode
router.get("/lost", async (req, res) => {
  if (req.query.code !== undefined) {
    const code = req.query.code;
    try {
      const lostData = await getLostData(code);
      if (lostData) {
        res.status(200).json(lostData);
      } else {
        res.status(404).json({ error: "Lost data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Missing code parameter" });
  }
});

// Update Lost mode - PATCH
router.patch("/lost", async (req, res) => {
  const code = req.query.code;
  const update = req.body.lost;
  if (code !== undefined && update !== undefined) {
    try {
      const updatedData = await updateLost(code, update);
      if (updatedData) {
        res.status(200).json(updatedData);
      } else {
        res.status(404).json({ error: "Lost data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Missing code or update parameter" });
  }
});

// GET contacts
router.get("/contacts", async (req, res) => {
  if (req.query.code !== undefined) {
    const code = req.query.code;
    try {
      const lostData = await getContactsData(code);
      if (lostData) {
        res.status(200).json(lostData);
      } else {
        res.status(404).json({ error: "Contacts not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Missing code parameter" });
  }
});

// Update contacts - PATCH
router.patch("/contacts", async (req, res) => {
  const code = req.query.code;
  const update = req.body.contacts;
  if (code !== undefined && update !== undefined) {
    try {
      const updatedData = await updateContacts(code, update);
      if (updatedData) {
        res.status(200).json(updatedData);
      } else {
        print("Received: ", update)
        res.status(404).json({ error: "Contacts data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Missing code or update parameter" });
  }
});

// GET heart rate data
router.get("/heart", async (req, res) => {
  if (req.query.code !== undefined) {
    const code = req.query.code;
    try {
      const alertData = await getHeartData(code);
      if (alertData) {
        res.status(200).json(alertData);
      } else {
        res.status(404).json({ error: "Heart data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Missing code parameter" });
  }
});
// PATCH heart rate data
router.patch("/heart", async (req, res) => {
  const code = req.query.code;
  const update = req.body;
  if (code !== undefined && update !== undefined) {
    try {
      const updatedData = await updateHeartData(code, update);
      if (updatedData) {
        res.status(200).json(updatedData);
      } else {
        res.status(404).json({ error: "Heart data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Missing code or update parameter" });
  }
});

// GET battery level
router.get("/battery", async (req, res) => {
  if (req.query.code !== undefined) {
    const code = req.query.code;
    try {
      const lostData = await getBatteryData(code);
      if (lostData) {
        res.status(200).json(lostData);
      } else {
        res.status(404).json({ error: "Battery data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Missing code parameter" });
  }
});

// Update battery level - PATCH
router.patch("/battery", async (req, res) => {
  const code = req.query.code;
  const update = req.body.battery;
  if (code !== undefined && update !== undefined) {
    try {
      const updatedData = await updateBatteryData(code, update);
      if (updatedData) {
        res.status(200).json(updatedData);
      } else {
        res.status(404).json({ error: "Battery data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Missing code or update parameter" });
  }
});

// Update emergency bool - PATCH
router.patch("/emergency", async (req, res) => {
  const code = req.query.code;
  const update = req.body.emergency;
  if (code !== undefined && update !== undefined) {
    try {
      const updatedData = await updateEmergency(code, update);
      if (updatedData) {
        res.status(200).json(updatedData);
      } else {
        res.status(404).json({ error: "emeregncy data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Missing code or update parameter" });
  }
  if(update){
    sendNotification();
  }
});

function sendNotification(){
  // Create a new Expo SDK client
  // optionally providing an access token if you have enabled push security
  let expo = new Expo({ accessToken: process.env.EXPO_ACCESS_TOKEN });

  // An array of push tokens to send notifications to
  const pushTokens = [
    'ExponentPushToken[c4x9xaAuN8ToW5TAQDkEgN]'
  ];

  // Create a message to send
  const message = {
    to: pushTokens,
    sound: 'default',
    title: 'FALL DETECTED!',
    body: 'StepSmart has detected a fall from a walking stick you are monitoring. Assisstance maybe required.',
    data: { additionalData: 'You can add additional data here.' }
  };

  // Send the notification
  expo.sendPushNotificationsAsync([message])
    .then(results => {
      console.log('Push notification results:', results);
    })
    .catch(error => {
      console.error('Error sending push notification:', error);
    });
}

export default router;
