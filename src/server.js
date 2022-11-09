import http from 'http';
import app from './app.mjs';
import './configs/loadEnv.mjs'

const server = http.createServer(app);
const PORT = process.env.PORT || 8081;

app.get('/hello', (req, res) => {
  res.json({message: 'Hello World'})
})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
})