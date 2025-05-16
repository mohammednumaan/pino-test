const express = require("express");
const logger = require("./logger");

const app = express();

app.get("/number", async (req, res, next) => {
  const sampleRequestId = Math.random();
  logger.info({ requestId: sampleRequestId }, "Received request at /number.");

  const responseNumber = Math.floor(Math.random() * 10);
  logger.debug("Generated a random number between 0 and 10.");

  res.json({ number: responseNumber });
  logger.responseSent(
    {
      requestId: sampleRequestId,
      response: { number: responseNumber },
    },
    "Sent response to client."
  );
});

app.listen(3000, () => {
  logger.info("[Server]: Server Listening at Port 3000.");
});
