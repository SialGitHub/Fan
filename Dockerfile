FROM node:14.9.0

RUN apk update

ENV NODE_ENV production

ENV PORT 3000

EXPOSE 3000

WORKDIR /home/app-name

COPY package.json package.json

RUN npm install

COPY . .

CMD ["npm", "start"]
