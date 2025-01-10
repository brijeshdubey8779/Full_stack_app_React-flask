FROM node:20.18.1

WORKDIR /app

COPY frontend/package*.json .

RUN npm install && npm install -D tailwindcss postcss autoprefixer

COPY frontend/ .

# RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]