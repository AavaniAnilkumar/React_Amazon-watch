# FROM node:latest
# WORKDIR /amazon-watch
# COPY package.json package.json
# RUN npm install
# COPY public /amazon-watch/public

# CMD ["npm", "start"]
FROM node:latest
WORKDIR /amazon-watch
COPY package.json package.json
RUN npm install
COPY src /amazon-watch/src
COPY public /amazon-watch/public
CMD ["npm", "start"]
