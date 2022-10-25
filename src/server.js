import http from 'http';
import app from './app.mjs';
import './configs/loadEnv.mjs'

const server = http.createServer(app);
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
})