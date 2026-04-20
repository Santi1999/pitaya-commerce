# Development Dockerfile for Medusa
FROM node:20-alpine

# Set working directory
WORKDIR /server

# Copy package files and npm config
COPY backend/package.json backend/package-lock.json ./

# Install all dependencies using npm
RUN npm install --legacy-peer-deps

# Copy source code
COPY ./backend .

# Make the start script executable
RUN echo "Running database migrations..." \
    medusa db:migrate && \
    npm run seed || echo "Seeding failed, continuing..."
# Expose the port Medusa runs on
EXPOSE 9000 5173

# Start with migrations and then the development server
CMD ["npm", "run", "build"]