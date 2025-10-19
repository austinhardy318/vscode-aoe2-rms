# Use Node.js 20 LTS as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the extension
RUN npm run compile

# Package the extension
RUN npm run package

# Create output directory
RUN mkdir -p /output

# Copy the built extension to output directory
RUN cp *.vsix /output/ 2>/dev/null || echo "No .vsix files found"

# Set default command to show the built files
CMD ["ls", "-la", "/output"]
