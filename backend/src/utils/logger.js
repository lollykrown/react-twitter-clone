const winston = require("winston");
//require("winston-mongodb");

dateFormat = () => {
  return new Date(Date.now()).toString();
};

class Loggerservice {
  constructor(route) {
    this.log_data = null;
    this.route = route;
    const logger = winston.createLogger({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `./log/${route}.log`,
          //log only error messages into file
          // level: "error",
        }),
        // new winston.transports.MongoDB({
        //   level: "error",
        //   db: process.env.DB_DEV_URL,
        //   options: { useUnifiedTopology: true },
        //   storeHost: true,
        //   collection: "errors_log",
        //   label: "error documents",
        //   // capped: true, // This sets the total limit of storage 10 10mb
        //   expireAfterSeconds: 1000 * 60 * 60 * 24 * 3, //3days
        // }),
      ],
      rejectionHandlers: [
        new winston.transports.File({ filename: "/.log/rejections.log" }),
      ],
      exceptionHandlers: [
        new winston.transports.File({ filename: "/.log/exceptions.log" }),
      ],
      // exitOnError: false, //exits on error
      format: winston.format.printf((info, ...metadata) => {
        let message = `${info.level.toUpperCase()}: ${dateFormat()} | ${route}.log | Message: ${
          info.message
        } | `;

        message = info.obj
          ? message + `data:${JSON.stringify(info.obj)} | `
          : message;

        message = this.log_data
          ? message + `log_data:${JSON.stringify(this.log_data)} |`
          : message;

          if(metadata) {
            message = info.metadata
            ? message + `log_data:${JSON.stringify(info.metadata)} |`
            : message;
            }

        return message;
      }),
    });
    this.logger = logger;
  }

  setLogData(log_data) {
    this.log_data = log_data;
  }
  async info(message) {
    this.logger.log("info", message);
  }
  async info(message, obj) {
    this.logger.log("info", message, {
      obj,
    });
  }
  async debug(message) {
    this.logger.log("debug", message);
  }
  async debug(message, obj) {
    this.logger.log("debug", message, {
      obj,
    });
  }
  async error(message) {
    this.logger.log("error", message);
  }
  async error(message, obj) {
    this.logger.log("error", message, {
      obj,
    });
  }
}

module.exports = Loggerservice;
