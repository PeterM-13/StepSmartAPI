# Step Smart API

This is the API for the Step Smart system.
It allows the app and Arduino to send and receive data to the databse and therefore communicate with each other.

## Dependecies
- express
- morgan
- pg
- cors

## Environment Variables
- DATABASE_URL
- PORT

## Deployment
To install dependencies run: `npm i`
To run locally: `npm run dev`
Can then use Postman to test api at url `localhost:3000/StepSmart/api/?code=12345678`

## Routes
API is at `/StepSmart/api/`
A code is required: `/StepSmart/api/?code=12345678`
The PATCH method requires body in json format
- Alert data (Get or Patch): `/StepSmart/api/alert?code=12345678`
- Contacts (Get or Patch): `/StepSmart/api/contacts?code=12345678`
- Lost mode (Get or Patch): `/StepSmart/api/lost?code=12345678`
- Heart rate logs (Get or Patch): `/StepSmart/api/heartrate?code=12345678`
- Battery level (Get or Patch): `/StepSmart/api/battery?code=12345678`

## Author
- Peter Metcalfe