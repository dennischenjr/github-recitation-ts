// Endpoint for querying the fibonacci numbers
// Endpoint for querying the fibonacci numbers
import express, {Request, Response} from 'express';




const fibonacci = express();

export default (req, res) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }


  res.send(result);

};
