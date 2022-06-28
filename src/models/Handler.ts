import logger from '../utils/logger';

class Handler {
    constructor() {}

    handleEvent = (event: any) => {
        const { type, group, bot } = event;
        if (type === 'Message4Bot')
            bot.sendMessage(group.id, this.handleMessage4Bot(event));
    };

    handleMessage4Bot = (event: any) => {
        const { text }: { text: string } = event;

        switch (text) {
            case 'ping':
                return { text: 'pong' };

            default:
                return { text: "I don't recognize that command." };
        }
    };

    handleAdaptiveCardCallback = async (event: any) => {
        console.log(event);
    };
}

export default Handler;
