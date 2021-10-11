
import createApp from 'ringcentral-chatbot/dist/apps';
import axios from 'axios';

import {handle} from './eventHandler';

const app = createApp(handle);
app.listen(process.env.RINGCENTRAL_CHATBOT_EXPRESS_PORT);

setInterval(
  () => axios.put(`${process.env.RINGCENTRAL_CHATBOT_SERVER}/admin/maintain`),
  86400000
);
