import http from 'http'
import dotenv from 'dotenv'
import { getHandler } from './modules/example/routes/handler';

dotenv.config()

const port = process.env.PORT || 3000

const app = http.createServer((request, response) => {
  const reqURL = request.url;
  const reqMethod = request.method;

  switch (reqMethod) {
    case 'GET':
      if (reqURL === '/doctor/get') {
        getHandler(request, response)
      }
    break;
    default:
      response.writeHead(200, {
        'Content-Type': 'application/json'
      });
      response.write(
        JSON.stringify({
          message: 'Hello, is there anything help?'
        })
      );
      response.end();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})