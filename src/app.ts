// import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import {
  getAvailableOptions,
  restaurantController,
} from './controller/restaurantController';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to BurgerMac');
});

app
  .route('/api/order')
  .get((req: Request, res: Response) => {
    return res.send(getAvailableOptions());
  })
  .post((req: Request, res: Response) => {
    return res.send(
      `You successfully ordered: ${restaurantController(req.body)}`
    );
  });

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

/*
//*Get
To access get api send get request to http://localhost:3000/api/order

//*Post
To create new order set post request to http://localhost:3000/api/order
with JSON body:
{
  "burger": "royal"
}
If successful will receive response with order confirmation.

*/
