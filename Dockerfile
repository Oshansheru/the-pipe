FROM node:18-alpine

WORKDIR /app

COPY backend/package*.json ./backend/
WORKDIR /app/backend
RUN npm install --production

WORKDIR /app
COPY backend ./backend
COPY frontend ./frontend

WORKDIR /app/backend

EXPOSE 3000

CMD ["npm", "start"]