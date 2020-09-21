FROM node:14.9.0

RUN apt-get update && apt-get install -qq -y \
    shellcheck \
  && rm -rf /var/lib/apt/lists/*

ENV PORT 3000

EXPOSE 3000

WORKDIR /usr/src/app/

COPY package.json package.json

RUN npm install

COPY . .

CMD ["npm", "start"]
