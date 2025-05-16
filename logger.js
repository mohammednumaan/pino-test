const pino = require("pino");

const customLevels = {
  responseSent: 35,
};

const formatters = {
  level(label, number) {
    return { level: label };
  },
};

const pinoConfig = {
  customLevels,
  level: "debug",
  transport: {
    target: "pino-pretty",
  },
  formatters,
};

const logger = pino({ ...pinoConfig });
module.exports = logger;
