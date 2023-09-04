# Base image
FROM node:alpine As development

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

COPY tsconfig.json tsconfig.json

COPY nest-cli.json nest-cli.json

RUN npm install

COPY apps/auth apps/auth 
COPY libs libs 


RUN npm run build auth

FROM node:alpine as production

ARG NODE_ENV=production 
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app 


COPY package*.json ./

RUN npm install

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/auth/main"]