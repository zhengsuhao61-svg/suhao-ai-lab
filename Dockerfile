FROM node:22-bookworm-slim

WORKDIR /app

COPY package*.json ./
COPY backend/package*.json ./backend/

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3001
ENV FRONTEND_DIST_PATH=../dist

EXPOSE 3001

CMD ["node", "backend/server.js"]
