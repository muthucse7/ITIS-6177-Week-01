# Dockerfile
FROM node:18

# Setup workdir
WORKDIR /app
COPY package*.json ./

# install deps
RUN npm install

# Copy deps
COPY . .

# run
EXPOSE 3000
CMD ["npm", "start"]