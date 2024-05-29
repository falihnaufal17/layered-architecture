import http from 'http'
import dotenv from 'dotenv'
import { getByIdHandler, getHandler } from './modules/example/routes/handler';

dotenv.config()

const port = process.env.PORT || 3000

const app = http.createServer((request, response) => {
  const reqURL = request.url;
  const reqMethod = request.method;
  const requestParams = request?.url?.split('?')[1];
  const requestParamsObj = requestParams ? JSON.parse('{"' + decodeURI(requestParams).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}') : null;

  switch (reqMethod) {
    case 'GET':
      if (reqURL === '/example/get') {
        getHandler(request, response)
      } else if (reqURL?.includes('/example/get') && requestParamsObj) {
        const customRequest = {...request, ...requestParamsObj}

        getByIdHandler(customRequest, response)
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