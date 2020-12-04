FROM node

WORKDIR /usr/app

COPY . /usr/app

RUN ["npm", "install"]

EXPOSE 8000

ENV PORT=8000

CMD ["node", "server.js"]