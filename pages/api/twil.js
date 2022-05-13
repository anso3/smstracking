const MessagingResponse = require("twilio").twiml.MessagingResponse;
import { newExpense } from "../../graphql/resolvers";
import parseSms from "../../ultities/parseSms";

export default async function handler(req, res) {
  const twiml = new MessagingResponse();

  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const { Body } = req.body;
  try {
    const [amount, category] = parseSms(Body.split(" "));
    const newExpenseRes = await newExpense({}, { category, amount });
    const totalSpent = newExpenseRes[0].amount;

    res.writeHead(200, { "Content-Type": "text/xml" });
    twiml.message(`You have spent ${totalSpent} on ${category} `);
    res.end(twiml.toString());
  } catch {
    res.writeHead(500, { "Content-Type": "text/xml" });
    twiml.message(`Error `);
    res.end(twiml.toString());
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb",
    },
  },
};
