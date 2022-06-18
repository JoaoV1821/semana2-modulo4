import Express from 'express';

const app = Express();
const port = 3000;

app.listen(() => {
    console.log(`Listen to port ${port}`);
});

