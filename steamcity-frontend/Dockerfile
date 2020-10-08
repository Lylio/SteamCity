# Stage 1
FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && \
    npm run build

# Stage 2
FROM nginx:alpine
COPY --from=builder /app/dist/* /usr/share/nginx/html/
