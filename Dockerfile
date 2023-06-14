FROM node:18-alpine

# Install nodemon
RUN npm install -g nodemon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Install dependancies
RUN npm install

# Bundle app source
COPY . .

# Expose the app's port
EXPOSE 3000

# Run the app in development mode with hot reloading
CMD ["nodemon", "--watch", ".", "--exec", "npm", "run", "dev"]