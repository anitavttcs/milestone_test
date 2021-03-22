FROM node:14
ENV NODE_ENV=production
WORKDIR /ui_dev_practice
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
