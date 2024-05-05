import { IncomingMessage, ServerResponse } from "http"

export const getHandler = (request: IncomingMessage, response: ServerResponse) => {
  response.writeHead(200, {
    'Content-Type': 'application/json'
  });
  response.write(JSON.stringify({
    message: 'success get doctors'
  }));
  response.end()
}