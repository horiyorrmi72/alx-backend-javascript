import app from './routes/index.js';

const host = '127.0.0.1';
const port = 1245;

app.listen(port, () => console.log(`app running at http://${host}:${port}/`));
export default app;