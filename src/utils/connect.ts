import express, { Application } from 'express';
import axios from 'axios';
import logger from './logger';

const connect = (app: Application) => {
    logger.debug(
        `Interactive Message listener on ${process.env.RINGCENTRAL_CHATBOT_SERVER}/callback`
    );

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.listen((process.env.PORT || 3000) as number, '0.0.0.0');

    setInterval(async () => {
        logger.debug('Maintain');
        axios.put(
            `${process.env.RINGCENTRAL_CHATBOT_SERVER}/admin/maintain`,
            undefined,
            {
                auth: {
                    username: process.env.RINGCENTRAL_CHATBOT_ADMIN_USERNAME!,
                    password: process.env.RINGCENTRAL_CHATBOT_ADMIN_PASSWORD!,
                },
            }
        );
    }, 24 * 60 * 60 * 1000);

    return app;
};

export default connect;
