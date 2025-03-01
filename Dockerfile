# Use a imagem base oficial do Node.js
FROM node:23-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Limpe o cache do npm e reinstale as dependências
RUN npm cache clean --force && rm -rf node_modules package-lock.json && npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta que a aplicação irá rodar
EXPOSE $PORT $PORT

# Comando para iniciar a aplicação
CMD ["npm", "start"]