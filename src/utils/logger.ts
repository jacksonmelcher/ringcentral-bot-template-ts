import pino from 'pino';

const config = {
    level: 'trace',
    transport: {
        target: 'pino-pretty',
        options:
            process.env.NODE_ENV !== 'DEV'
                ? {
                      ignore: 'pid,hostname,time',
                  }
                : {
                      translateTime: 'SYS:mm/dd/yy hh:mm:ss',
                      ignore: 'pid,hostname',
                  },
    },
};

const logger = pino(config);

export default logger;
