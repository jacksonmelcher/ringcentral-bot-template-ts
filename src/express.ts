import createApp from 'ringcentral-chatbot/dist/apps';
import { Application } from 'express';
import Handler from './models/Handler';
import connect from './utils/connect';
import routes from './routes';

const handler = new Handler();

const app: Application = connect(createApp(handler.handleEvent));

routes(app, handler);
