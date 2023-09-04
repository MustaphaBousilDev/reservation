FROM node:alpine As development

# Create app directory
WORKDIR /usr/src/app 

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

COPY tsconfig.json tsconfig.json

COPY nest-cli.json nest-cli.json


RUN npm install

COPY apps/notifications apps/notifications
COPY libs libs 

RUN cd apps/notifications && npm install

RUN npm run build notifications

FROM node:alpine as production

ARG NODE_ENV=production 
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app 


COPY package*.json ./

RUN npm install

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/notifications/main"]