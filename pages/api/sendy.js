import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

const Sendy = require("sendy-api");
const sendy = new Sendy(process.env.SENDY_URL, process.env.SENDY_API_KEY);

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["POST"],
  })
);

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);

  const { email } = JSON.parse(req.body);

  // Rest of the API logic
  sendy.subscribe(
    { email: email, list_id: process.env.SENDY_LIST_ID },
    function (err, result) {
      if (err) {
        res.status(400).json({ error: err, result: result });
        console.log(err.toString());
      } else res.status(200).json(result);
    }
  );
}

export const config = {
  api: {
    externalResolver: true,
  },
};
