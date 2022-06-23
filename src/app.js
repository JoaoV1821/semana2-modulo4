import Express from 'express';

import {tipsGet} from './controller/tipsController.js';

const app = Express();
const port = 3000;

app.use(Express.json())

tipsGet(app);

app.listen(port, () => {
    console.log(`Listen to port ${port}`);
});

