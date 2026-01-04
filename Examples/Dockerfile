# Build stage – compiles native module and installs dependencies
FROM node:20-bullseye AS build
RUN apt-get update && apt-get install -y \
    openjdk-17-jdk-headless \
    build-essential

# Clean up cache
RUN rm -rf /var/lib/apt/lists/*

# Set JAVA_HOME and update PATH
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH=$JAVA_HOME/bin:$PATH

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the rest of the app
COPY . .

# Final stage – slim runtime image
FROM node:20-bullseye-slim AS final

# Install Java runtime
RUN apt-get update && apt-get install -y \
    openjdk-17-jre-headless  
    
# Clean up cache
RUN rm -rf /var/lib/apt/lists/*

# Set JAVA_HOME and update PATH
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH=$JAVA_HOME/bin:$PATH

# Set working directory
WORKDIR /app

# Copy built application and node_modules from the build stage
COPY --from=build /app .

# Set the entry point and default command
CMD ["npm", "start"]
