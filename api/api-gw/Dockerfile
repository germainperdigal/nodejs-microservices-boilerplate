# Dockerfile for API Gateway
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
EXPOSE 3000

# Command to run the application
CMD ["nodemon", "-r", "module-alias/register", "src/server.ts", "--watch", "src", "--watch", "../shared"]
