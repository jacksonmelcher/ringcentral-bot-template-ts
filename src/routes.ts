import { Application, Request, Response } from 'express';
import Handler from './models/Handler';
import { validateInteractiveMessage } from './middleware/validate';

const routes = (app: Application, handler: Handler) => {
    const { handleAdaptiveCardCallback } = handler;

    app.post(
        '/callback',
        validateInteractiveMessage(),
        (req: Request, res: Response) => {
            handleAdaptiveCardCallback(req.body);
            res.sendStatus(200);
        }
    );
};

export default routes;
