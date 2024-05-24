'use strict';

const fastify = require('fastify')();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const OS = require('os');
const ENV = 'DEV';

// Route handlers
fastify.get('/', async (request, reply) => {
  const msg = 'Quem diria que a gente finalmente conseguiu ver alguma coisa acontecer depois desse perrengue todo !';
    return reply.type('text/html').send(getPage(msg));
  //return getPage(msg);
});

fastify.get('/test', async (request, reply) => {
  const msg = 'Hello from /test Node!';
  return reply.type('text/html').send(getPage(msg));
});

// Start the server
const start = async () => {
  try {
    await fastify.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();

function getPage(message) {
  return `<!DOCTYPE html>
<html>
  <style>
    body, html {
      height: 100%;
      margin: 0;
    }
    
    .bgimg {
      background-image: url('https://www.w3schools.com/w3images/forestbridge.jpg');
      height: 100%;
      background-position: center;
      background-size: cover;
      position: relative;
      color: white;
      font-family: "Courier New", Courier, monospace;
      font-size: 25px;
    }
    
    .topleft {
      position: absolute;
      top: 0;
      left: 16px;
    }
    
    .bottomleft {
      position: absolute;
      bottom: 0;
      left: 16px;
    }
    
    .middle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    
    hr {
      margin: auto;
      width: 40%;
    }
  </style>
  <body>
    <div class="bgimg">
      <div class="topleft">
        <p>ENVIRONMENT: ${ENV}</p>
      </div>
      <div class="middle">
        <h1>Host/container name</h1>
        <hr>
        <p>${OS.hostname()}</p>
      </div>
      <div class="bottomleft">
        <p>${message}</p>
      </div>
    </div>
  </body>
</html>`;
}