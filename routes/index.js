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

  const somePushTokens = [
    `ExponentPushToken[${process.env.EXPO_ACCESS_TOKEN}]`,
  ]
  console.log(somePushTokens[0]);

  // Create the messages that you want to send to clients
  let messages = [];
  for (let pushToken of somePushTokens) {
    // Each push token looks like ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]

    // Check that all your push tokens appear to be valid Expo push tokens
    if (!Expo.isExpoPushToken(pushToken)) {
      console.error(`Push token ${pushToken} is not a valid Expo push token`);
      continue;
    }

    // Construct a message (see https://docs.expo.io/push-notifications/sending-notifications/)
    messages.push({
      to: pushToken,
      sound: 'default',
      body: 'A fall has been detected!',
      data: { withSome: 'data' },
    })
  }

  // The Expo push notification service accepts batches of notifications so
  // that you don't need to send 1000 requests to send 1000 notifications. We
  // recommend you batch your notifications to reduce the number of requests
  // and to compress them (notifications with similar content will get
  // compressed).
  let chunks = expo.chunkPushNotifications(messages);
  let tickets = [];
  (async () => {
    // Send the chunks to the Expo push notification service. There are
    // different strategies you could use. A simple one is to send one chunk at a
    // time, which nicely spreads the load out over time:
    for (let chunk of chunks) {
      try {
        let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
        console.log(ticketChunk);
        tickets.push(...ticketChunk);
        // NOTE: If a ticket contains an error code in ticket.details.error, you
        // must handle it appropriately. The error codes are listed in the Expo
        // documentation:
        // https://docs.expo.io/push-notifications/sending-notifications/#individual-errors
      } catch (error) {
        console.error(error);
      }
    }
  })();
}

export default router;
