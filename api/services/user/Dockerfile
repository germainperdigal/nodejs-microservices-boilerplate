# Dockerfile for User Service
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Install nodemon for development
RUN npm install -g nodemon

# Copy application files
COPY . .

# Expose port
EXPOSE 3001

# Command to run the application
CMD ["nodemon", "src/app.ts"]
