# Step Smart API

This is the API for the Step Smart system.<br>
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
To install dependencies run: `npm i`<br>
To run locally: `npm run dev`<br>
Can then use Postman to test api at url `localhost:3000/StepSmart/api/?code=12345678`

## Routes
API is at `/StepSmart/api/`<br>
A code is required: `/StepSmart/api/?code=12345678`<br>
The PATCH method requires a body in json format
| Endpoint                 | Method    | URL                                |
| ----------------------- | --------- | ---------------------------------- |
| Alert data              | GET/PATCH | `/StepSmart/api/alert?code=12345678`    |
| Contacts                | GET/PATCH | `/StepSmart/api/contacts?code=12345678` |
| Lost mode               | GET/PATCH | `/StepSmart/api/lost?code=12345678`    |
| Heart rate data         | GET/PATCH | `/StepSmart/api/heart?code=12345678`   |
| Battery level           | GET/PATCH | `/StepSmart/api/battery?code=12345678` |

## Author
- Peter Metcalfe