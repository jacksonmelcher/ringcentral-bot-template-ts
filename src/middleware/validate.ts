import { Request, Response, NextFunction } from 'express';
import { createHmac } from 'crypto';
import { get } from 'lodash';
import jwt from 'jwt-simple';
import { Service } from 'ringcentral-chatbot/dist/models';
import logger from '../utils/logger';

export const validateInteractiveMessage =
    () => (req: Request, res: Response, next: NextFunction) => {
        const signature = req.get('X-Glip-Signature');
        logger.debug('Acquired glip signature...');
        const hmac = createHmac(
            'sha1',
            process.env.INTERACTIVE_MESSAGE_SECRET as string
        )
            .update(JSON.stringify(req.body))
            .digest()
            .toString('hex') as unknown as Buffer;

        if ((hmac as unknown as string) !== signature) {
            logger.fatal('Api key in incorrect');
            res.status(403).send({ error: 'No token supplied' });
        }

        logger.debug('API key is valid...');
        next();
    };
