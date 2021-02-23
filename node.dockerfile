FROM node:14

RUN mkdir /app

WORKDIR /app

COPY server.js /app/

RUN npm install express --save

RUN npm install

CMD [ "node", "server.js" ]
