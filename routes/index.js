import express from "express";
import { Expo } from 'expo-server-sdk';

const router = express.Router();

import {
  getStickData,
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
  updateEmergency,
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

// GET all arduino data
router.get("/arduino", async (req, res) => {
  if (req.query.code !== undefined) {
    const code = req.query.code;
    try {
      console.log(code);
      const stickData = await getArduinoData(code);
      console.log(stickData);
      if (stickData) {
        res.status(200).json(stickData);
      } else {
        res.status(404).json({ error: "Arduino data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(200).json({ status: "Good connection", error: "Add code parameter" });
  }
});

// GET devices
router.get("/devices", async (req, res) => {
  if (req.query.code !== undefined) {
    const code = req.query.code;
    try {
      const devices = await getDevices(code);
      if (devices) {
        res.status(200).json(devices);
      } else {
        res.status(404).json({ error: "Devices data not found" });
      }
    } catch (error) {
      console.error("Error getting devices:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Missing code parameter" });
  }
});
// POST devices data (add new one)
router.post("/devices", async (req, res) => {
  const code = req.query.code;
  const update = req.body.devices;
  if (code !== undefined && update !== undefined) {
    try {
      const updatedData = await updateDevices(code, update);
      if (updatedData) {
        res.status(200).json(updatedData);
      } else {
        res.status(404).json({ error: "Device data not found" });
      }
    } catch (error) {
      console.error("Error adding device:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Missing code or update parameter" });
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
      const contactsData = await getContactsData(code);
      if (contactsData) {
        res.status(200).json(contactsData);
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
      const heartData = await getHeartData(code);
      if (heartData) {
        res.status(200).json(heartData);
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
// POST a single heart rate value
router.post("/heartBpm", async (req, res) => {
  const code = req.query.code;
  const value = parseInt(req.body.value);
  const heartData = await getHeartData(code);
  let update = heartData;
  console.log(update)
  update.heartrate.readings[update.heartrate.readings.length-1] = value;
  if (code !== undefined && update !== undefined && !isNaN(value)) {
    try {
      const updatedData = await updateHeartData(code, update.heartrate);
      if (updatedData) {
        res.status(200).json(updatedData);
      } else {
        res.status(404).json({ error: "Heart bpm data not found" });
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
      const batteryData = await getBatteryData(code);
      if (batteryData) {
        res.status(200).json(batteryData);
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

// GET emergency value
router.get("/emergency", async (req, res) => {
  if (req.query.code !== undefined) {
    const code = req.query.code;
    try {
      const emergencyData = await getEmergency(code);
      if (emergencyData) {
        res.status(200).json(emergencyData);
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
// Update emergency bool - PATCH
router.patch("/emergency", async (req, res) => {
  const code = req.query.code;
  const update = req.body;
  if (code !== undefined && update !== undefined) {
    try {
      const updatedData = await updateEmergency(code, update.emergency);
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

  const alertData = await getAlertData(code);
  if(update.emergency && alertData.alert == '1'){
    if(update.fall){
      await sendNotification(code, 'FALL DETECTED!', 'StepSmart has detected a fall from a walking stick you are monitoring. Assisstance maybe required.');
    }else{
      await sendNotification(code, 'EMERGENCY!', 'The emergency button has been pressed on a walking stick you are monitoring. Assisstance maybe required.');
    }
  }
});

async function sendNotification(code, title, body){
  // Create a new Expo SDK client
  // optionally providing an access token if you have enabled push security
  let expo = new Expo({ accessToken: process.env.EXPO_ACCESS_TOKEN });

  // An array of push tokens to send notifications to
  let pushTokens;
  try{
    pushTokens = await getDevices(code);
  }
  catch(error){
    console.error("Failed to fetch tokens, couldn't send notification:\n", error)
    return;
  }

  // Create a message to send
  const message = {
    to: pushTokens,
    sound: 'default',
    priority: 'high',
    title: title,
    body: body,
    //data: { additionalData: 'You can add additional data here.' }
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