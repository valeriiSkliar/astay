# Use the official Node.js image as the base image
FROM node:20 AS base

FROM base AS deps
# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY package-lock.json ./
COPY node_modules ./app/
RUN npm install -g npm@latest
RUN npm config set fetch-retry-maxtimeout 10000

RUN \
  if [ -f package-lock.json ]; then npm -v; \
  else npm install; \
  fi
  

# RUN npm install -g typescript
# RUN npm install -g ts-node
# RUN npm install -g nodemon
# RUN npm install -D typescript

FROM base AS builder
WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules

# Install the application dependencies
# RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port on which the application will run (adjust if necessary)
EXPOSE 8000

# Set the command to run the application
CMD ["npm", "run", "start"]