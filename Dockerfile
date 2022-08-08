FROM node:14-alpine AS builder
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
# Copy app files
Run npm install

COPY . .
# Build the app
Run npm start

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production

# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]